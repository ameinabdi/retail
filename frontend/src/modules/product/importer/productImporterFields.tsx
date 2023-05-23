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
    name: 'purchaseDate',
    label: i18n('entities.product.fields.purchaseDate'),
    schema: schemas.datetime(
      i18n('entities.product.fields.purchaseDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'productPhoto',
    label: i18n('entities.product.fields.productPhoto'),
    schema: schemas.images(
      i18n('entities.product.fields.productPhoto'),
      {
        "max": 1
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.product.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.product.fields.shop'),
      {
        "required": true
      },
    ),
  },
];