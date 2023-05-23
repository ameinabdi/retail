import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/receiptVoucher/importer/receiptVoucherImporterSelectors';
import ReceiptVoucherService from 'src/modules/receiptVoucher/receiptVoucherService';
import fields from 'src/modules/receiptVoucher/importer/receiptVoucherImporterFields';
import { i18n } from 'src/i18n';

const receiptVoucherImporterActions = importerActions(
  'RECEIPTVOUCHER_IMPORTER',
  selectors,
  ReceiptVoucherService.import,
  fields,
  i18n('entities.receiptVoucher.importer.fileName'),
);

export default receiptVoucherImporterActions;