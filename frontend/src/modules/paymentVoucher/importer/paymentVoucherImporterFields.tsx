import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'supplier',
    label: i18n('entities.paymentVoucher.fields.supplier'),
    schema: schemas.relationToOne(
      i18n('entities.paymentVoucher.fields.supplier'),
      {},
    ),
  },
  {
    name: 'unPaidAmount',
    label: i18n('entities.paymentVoucher.fields.unPaidAmount'),
    schema: schemas.decimal(
      i18n('entities.paymentVoucher.fields.unPaidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.paymentVoucher.fields.paidAmount'),
    schema: schemas.decimal(
      i18n('entities.paymentVoucher.fields.paidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.paymentVoucher.fields.balanceAmount'),
    schema: schemas.decimal(
      i18n('entities.paymentVoucher.fields.balanceAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paymentNote',
    label: i18n('entities.paymentVoucher.fields.paymentNote'),
    schema: schemas.string(
      i18n('entities.paymentVoucher.fields.paymentNote'),
      {},
    ),
  },
];