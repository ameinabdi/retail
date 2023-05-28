import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'productName',
    label: i18n('entities.product.fields.productName'),
    schema: schemas.string(
      i18n('entities.product.fields.productName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'productSerialNumber',
    label: i18n('entities.product.fields.productSerialNumber'),
    schema: schemas.string(
      i18n('entities.product.fields.productSerialNumber'),
      {},
    ),
  },
  {
    name: 'productQuantity',
    label: i18n('entities.product.fields.productQuantity'),
    schema: schemas.integer(
      i18n('entities.product.fields.productQuantity'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'productPrice',
    label: i18n('entities.product.fields.productPrice'),
    schema: schemas.decimal(
      i18n('entities.product.fields.productPrice'),
      {
        "scale": 2
      },
    ),
  },
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
    name: 'purchaseDate',
    label: i18n('entities.purchase.fields.purchaseDate'),
    schema: schemas.datetime(
      i18n('entities.purchase.fields.purchaseDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
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