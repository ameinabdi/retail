import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'customer',
    label: i18n('entities.receiptVoucher.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.receiptVoucher.fields.customer'),
      {},
    ),
  },
  {
    name: 'unpaidAmount',
    label: i18n('entities.receiptVoucher.fields.unpaidAmount'),
    schema: schemas.decimal(
      i18n('entities.receiptVoucher.fields.unpaidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.receiptVoucher.fields.paidAmount'),
    schema: schemas.decimal(
      i18n('entities.receiptVoucher.fields.paidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.receiptVoucher.fields.balanceAmount'),
    schema: schemas.decimal(
      i18n('entities.receiptVoucher.fields.balanceAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'receiptNote',
    label: i18n('entities.receiptVoucher.fields.receiptNote'),
    schema: schemas.string(
      i18n('entities.receiptVoucher.fields.receiptNote'),
      {},
    ),
  },
];