import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/purchaseItem/importer/purchaseItemImporterSelectors';
import PurchaseItemService from 'src/modules/purchaseItem/purchaseItemService';
import fields from 'src/modules/purchaseItem/importer/purchaseItemImporterFields';
import { i18n } from 'src/i18n';

const purchaseItemImporterActions = importerActions(
  'PURCHASEITEM_IMPORTER',
  selectors,
  PurchaseItemService.import,
  fields,
  i18n('entities.purchaseItem.importer.fileName'),
);

export default purchaseItemImporterActions;