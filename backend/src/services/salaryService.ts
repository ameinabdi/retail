import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SalaryRepository from '../database/repositories/salaryRepository';
import AccountsRepository from '../database/repositories/accountsRepository';
import ShopRepository from '../database/repositories/shopRepository';
import UserRepository from '../database/repositories/userRepository';

export default class SalaryService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.employee = await UserRepository.filterIdInTenant(data.employee, { ...this.options, transaction });
      data.account = await AccountsRepository.filterIdInTenant(data.account, { ...this.options, transaction });
      data.shop = await ShopRepository.filterIdInTenant(data.shop, { ...this.options, transaction });

      const record = await SalaryRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'salary',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.employee = await UserRepository.filterIdInTenant(data.employee, { ...this.options, transaction });
      data.account = await AccountsRepository.filterIdInTenant(data.account, { ...this.options, transaction });
      data.shop = await ShopRepository.filterIdInTenant(data.shop, { ...this.options, transaction });

      const record = await SalaryRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'salary',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await SalaryRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return SalaryRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SalaryRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return SalaryRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await SalaryRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
