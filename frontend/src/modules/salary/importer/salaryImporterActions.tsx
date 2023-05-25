import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/salary/importer/salaryImporterSelectors';
import SalaryService from 'src/modules/salary/salaryService';
import fields from 'src/modules/salary/importer/salaryImporterFields';
import { i18n } from 'src/i18n';

const salaryImporterActions = importerActions(
  'SALARY_IMPORTER',
  selectors,
  SalaryService.import,
  fields,
  i18n('entities.salary.importer.fileName'),
);

export default salaryImporterActions;