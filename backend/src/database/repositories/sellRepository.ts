import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Error400 from '../../errors/Error400';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class SellRepository {

  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );
    if(!data.customer && data.balanceAmount > 0){
      throw new Error400(
        options.language,
        'entities.sell.errors.customerIsRequired',
      );
    }

    const record = await options.database.sell.create(
      {
        ...lodash.pick(data, [
          'sellDate',
          'sellDetails',
          'totalAmount',
          'paidAmount',
          'balanceAmount',          
          'importHash',
        ]),
        sellById:data.sellBy,
        customerId: data.customer || null,
        shopId: data.shop || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    data.Items.map(async(item) => {
      const amount = ((parseFloat(item.quantity)*parseFloat(item.price)))
      let product = await options.database.product.findOne({
        where: {
          id:item.product ? item.product?.id : '',
        },
        transaction,
      },)
      await options.database.sellItem.create(
        {
          ...lodash.pick(item, [
            'price',
            'quantity',
            'importHash',
          ]),
          sellDate: data.sellDate,
          total:amount,
          itemName:product.productName,
          productId: item.product?.id || null,
          sellId: record.id || null,
          shopId: record.shopId || null,
          tenantId: tenant.id,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        {
          transaction,
        },
      );
    })
  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );


    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.sell.findOne(      
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include:[
          {
            model: options.database.sellItem,
            as: 'Items',
          }
        ],
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }


    record = await record.update(
      {
        ...lodash.pick(data, [
          'sellDate',
          'sellDetails',
          'totalAmount',
          'paidAmount',
          'balanceAmount',          
          'importHash',
        ]),
        sellById:data.sellBy,
        customerId: data.customer || null,
        shopId: data.shop || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    const ids = data.Items.map((data)=>{return data.id ? data.id : ''})

    let deletes = await options.database.sellItem.findAll(      
      {
        where: {
          id: {
            [Op.notIn]: ids,
          },
          sellId: id,
        },
        transaction,
      },
    )
    for (const deleted of deletes) {
      let deletedOne = await options.database.sellItem.findOne(
        {
          where: {
            id:deleted.id,
          },
          transaction,
        },
      );
  
      if (!deletedOne) {
        throw new Error404();
      }
  
      await deletedOne.destroy({
        transaction,
      });
    }

    data.Items.map(async(item)=>{
      const idItem = item.id
      const amount = ((parseFloat(item.quantity)*parseFloat(item.price)))
      let product = await options.database.product.findOne({
        where: {
          id:item.product ? item.product.id : null,
        },
        transaction,
      },)

      if(idItem && idItem != undefined){
        let findOneItem = await options.database.sellItem.findOne(      
          {
            where: {
              id:idItem,
            },
            transaction,
          },
        );
        await findOneItem.update(
          {
            ...lodash.pick(item, [
              'price',
              'quantity',
              'importHash',
            ]),
            sellDate: data.sellDate,
            itemName: product?.productName,
            productId: item.product?.id || null,
            shopId: record.shopId || null,
            total:amount,
            updatedById: currentUser.id,
          },
          {
            transaction,
          },
        );
        
      }else{
        await options.database.sellItem.create(
          {
            ...lodash.pick(item, [
              'price',
              'quantity',
              'importHash',
            ]),
            sellDate: data.sellDate,
            itemName: product?.productName,
            total:amount,
            sellId: record.id || null,
            productId: item.product?.id || null,
            shopId: record.shopId || null,
            tenantId:  currentTenant.id,
            createdById: currentUser.id,
            updatedById: currentUser.id,
          },
          {
            transaction,
          },
        );
        }
    })






    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.sell.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    const deletes = await options.database.sellItem.findAll(      
      {
        where: {
          sellId: id,
        },
        transaction,
      },
    )  

    for (const deleted of deletes) {
      let deletedOne = await options.database.sellItem.findOne(
        {
          where: {
            id:deleted.id,
          },
          transaction,
        },
      );
  
      if (!deletedOne) {
        throw new Error404();
      }
  
      await deletedOne.destroy({
        transaction,
      });
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.customer,
        as: 'customer',
      },
      {
        model: options.database.shop,
        as: 'shop',
      },
      {
        model: options.database.user,
        as: 'sellBy',
      },
      {
        model: options.database.sellItem,
        as: 'Items',
        include:[
          {
            model: options.database.product,
            as: 'product',
          },
        ]
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.sell.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        include,
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      SequelizeRepository.getCurrentTenant(options);

    const where = {
      id: {
        [Op.in]: ids,
      },
      tenantId: currentTenant.id,
    };

    const records = await options.database.sell.findAll(
      {
        attributes: ['id'],
        where,
      },
    );

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.sell.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
        transaction,
      },
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.customer,
        as: 'customer',
      },
      {
        model: options.database.shop,
        as: 'shop',
      },
      {
        model: options.database.user,
        as: 'sellBy',
      },
      {
        model: options.database.sellItem,
        as: 'Items',
        include:[
          {
            model: options.database.product,
            as: 'product',
          },
        ]
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.customer) {
        whereAnd.push({
          ['customerId']: SequelizeFilterUtils.uuid(
            filter.customer,
          ),
        });
      }

      if (filter.sellDateRange) {
        const [start, end] = filter.sellDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            sellDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            sellDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.sellDetails) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'sell',
            'sellDetails',
            filter.sellDetails,
          ),
        );
      }

      if (filter.totalAmountRange) {
        const [start, end] = filter.totalAmountRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            totalAmount: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            totalAmount: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.paidAmountRange) {
        const [start, end] = filter.paidAmountRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            paidAmount: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            paidAmount: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.balanceAmountRange) {
        const [start, end] = filter.balanceAmountRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            balanceAmount: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            balanceAmount: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.shop) {
        whereAnd.push({
          ['shopId']: SequelizeFilterUtils.uuid(
            filter.shop,
          ),
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

    let {
      rows,
      count,
    } = await options.database.sell.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.sell.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'sell',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
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

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );



    return output;
  }
}

export default SellRepository;
