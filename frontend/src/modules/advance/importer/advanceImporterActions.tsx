import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/advance/importer/advanceImporterSelectors';
import AdvanceService from 'src/modules/advance/advanceService';
import fields from 'src/modules/advance/importer/advanceImporterFields';
import { i18n } from 'src/i18n';

const advanceImporterActions = importerActions(
  'ADVANCE_IMPORTER',
  selectors,
  AdvanceService.import,
  fields,
  i18n('entities.advance.importer.fileName'),
);

export default advanceImporterActions;