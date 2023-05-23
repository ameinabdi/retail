import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import DashboardRepository from '../database/repositories/dashboardRepository';

export default class InvigilatorService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async dashboardView(args) {
    return DashboardRepository.dashboardView(
      args,
      this.options,
    );
  }
  async dashboardApp(args) {
    return DashboardRepository.dashboardApp(
      args,
      this.options,
    );
  }
}
