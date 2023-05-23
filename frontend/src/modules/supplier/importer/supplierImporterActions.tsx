import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/supplier/importer/supplierImporterSelectors';
import SupplierService from 'src/modules/supplier/supplierService';
import fields from 'src/modules/supplier/importer/supplierImporterFields';
import { i18n } from 'src/i18n';

const supplierImporterActions = importerActions(
  'SUPPLIER_IMPORTER',
  selectors,
  SupplierService.import,
  fields,
  i18n('entities.supplier.importer.fileName'),
);

export default supplierImporterActions;