import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'product',
    label: i18n('entities.purchaseItem.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseItem.fields.product'),
      {},
    ),
  },
  {
    name: 'itemName',
    label: i18n('entities.purchaseItem.fields.itemName'),
    schema: schemas.string(
      i18n('entities.purchaseItem.fields.itemName'),
      {},
    ),
  },
  {
    name: 'costPrice',
    label: i18n('entities.purchaseItem.fields.costPrice'),
    schema: schemas.decimal(
      i18n('entities.purchaseItem.fields.costPrice'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.purchaseItem.fields.quantity'),
    schema: schemas.integer(
      i18n('entities.purchaseItem.fields.quantity'),
      {},
    ),
  },
  {
    name: 'sellingPrice',
    label: i18n('entities.purchaseItem.fields.sellingPrice'),
    schema: schemas.decimal(
      i18n('entities.purchaseItem.fields.sellingPrice'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'totalPrice',
    label: i18n('entities.purchaseItem.fields.totalPrice'),
    schema: schemas.decimal(
      i18n('entities.purchaseItem.fields.totalPrice'),
      {},
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.purchaseItem.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.purchaseItem.fields.shop'),
      {},
    ),
  },
];