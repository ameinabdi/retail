import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/sell/importer/sellImporterSelectors';
import SellService from 'src/modules/sell/sellService';
import fields from 'src/modules/sell/importer/sellImporterFields';
import { i18n } from 'src/i18n';

const sellImporterActions = importerActions(
  'SELL_IMPORTER',
  selectors,
  SellService.import,
  fields,
  i18n('entities.sell.importer.fileName'),
);

export default sellImporterActions;