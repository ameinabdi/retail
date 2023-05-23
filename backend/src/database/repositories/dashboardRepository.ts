import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize,{ QueryTypes } from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';
import FileRepository from './fileRepository';

const Op = Sequelize.Op;

class InvigilatorRepository {

static async dashboardView(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    
    const where = { [Op.and]: whereAnd };

    let dashboardCounts = await options.database.sequelize.query(`SELECT * FROM summarycounts WHERE tenantId="${tenant.id}"LIMIT 1`, { type: QueryTypes.SELECT });
    let dailysells = await options.database.sequelize.query(`SELECT * FROM dailysells WHERE tenantId="${tenant.id}"`, { type: QueryTypes.SELECT });
    let dailypurchase = await options.database.sequelize.query(`SELECT * FROM dailypurchases WHERE tenantId="${tenant.id}"`, { type: QueryTypes.SELECT });


    return {dailysells:dailysells, dailypurchase:dailypurchase,  dashboardCounts:dashboardCounts[0] };
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }


  static async dashboardApp(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.examcenter,
        as: 'examCenter',
      },      
    ];

    whereAnd.push({
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.fullName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'invigilator',
            'fullName',
            filter.fullName,
          ),
        );
      }
      if (filter.telephone) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'invigilator',
            'telephone',
            filter.telephone,
          ),
        );
      }

      if (filter.examCenter) {
        whereAnd.push({
          ['id']:filter.examCenter
        });
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let teachers = await options.database.invigilator_attendance_by_examcenter.findAll({
      where,
      order: [['fullName', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    let students = await options.database.attendance_by_examcenter.findAll({
      where,
      order: [['ClassName', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    return { students,teachers };
  }



















  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.photo = await FileRepository.fillDownloadUrl(
      await record.getPhoto({
        transaction,
      }),
    );

    return output;
  }
}

export default InvigilatorRepository;
