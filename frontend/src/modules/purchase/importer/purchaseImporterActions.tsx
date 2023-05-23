import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/purchase/importer/purchaseImporterSelectors';
import PurchaseService from 'src/modules/purchase/purchaseService';
import fields from 'src/modules/purchase/importer/purchaseImporterFields';
import { i18n } from 'src/i18n';

const purchaseImporterActions = importerActions(
  'PURCHASE_IMPORTER',
  selectors,
  PurchaseService.import,
  fields,
  i18n('entities.purchase.importer.fileName'),
);

export default purchaseImporterActions;