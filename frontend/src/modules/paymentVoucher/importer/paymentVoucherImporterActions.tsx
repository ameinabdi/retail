import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/paymentVoucher/importer/paymentVoucherImporterSelectors';
import PaymentVoucherService from 'src/modules/paymentVoucher/paymentVoucherService';
import fields from 'src/modules/paymentVoucher/importer/paymentVoucherImporterFields';
import { i18n } from 'src/i18n';

const paymentVoucherImporterActions = importerActions(
  'PAYMENTVOUCHER_IMPORTER',
  selectors,
  PaymentVoucherService.import,
  fields,
  i18n('entities.paymentVoucher.importer.fileName'),
);

export default paymentVoucherImporterActions;