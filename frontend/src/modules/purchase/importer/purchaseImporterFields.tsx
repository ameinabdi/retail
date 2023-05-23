import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'supplier',
    label: i18n('entities.purchase.fields.supplier'),
    schema: schemas.relationToOne(
      i18n('entities.purchase.fields.supplier'),
      {},
    ),
  },
  {
    name: 'totalAmount',
    label: i18n('entities.purchase.fields.totalAmount'),
    schema: schemas.decimal(
      i18n('entities.purchase.fields.totalAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.purchase.fields.paidAmount'),
    schema: schemas.decimal(
      i18n('entities.purchase.fields.paidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.purchase.fields.balanceAmount'),
    schema: schemas.decimal(
      i18n('entities.purchase.fields.balanceAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'purchaseDate',
    label: i18n('entities.purchase.fields.purchaseDate'),
    schema: schemas.datetime(
      i18n('entities.purchase.fields.purchaseDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'purchaseDatails',
    label: i18n('entities.purchase.fields.purchaseDatails'),
    schema: schemas.string(
      i18n('entities.purchase.fields.purchaseDatails'),
      {},
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.purchase.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.purchase.fields.shop'),
      {},
    ),
  },
];