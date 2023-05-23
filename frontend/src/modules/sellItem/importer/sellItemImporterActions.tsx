import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/sellItem/importer/sellItemImporterSelectors';
import SellItemService from 'src/modules/sellItem/sellItemService';
import fields from 'src/modules/sellItem/importer/sellItemImporterFields';
import { i18n } from 'src/i18n';

const sellItemImporterActions = importerActions(
  'SELLITEM_IMPORTER',
  selectors,
  SellItemService.import,
  fields,
  i18n('entities.sellItem.importer.fileName'),
);

export default sellItemImporterActions;