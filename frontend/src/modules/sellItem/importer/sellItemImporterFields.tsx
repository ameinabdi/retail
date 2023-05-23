import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'itemName',
    label: i18n('entities.sellItem.fields.itemName'),
    schema: schemas.string(
      i18n('entities.sellItem.fields.itemName'),
      {},
    ),
  },
  {
    name: 'product',
    label: i18n('entities.sellItem.fields.product'),
    schema: schemas.relationToOne(
      i18n('entities.sellItem.fields.product'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.sellItem.fields.price'),
    schema: schemas.decimal(
      i18n('entities.sellItem.fields.price'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.sellItem.fields.quantity'),
    schema: schemas.decimal(
      i18n('entities.sellItem.fields.quantity'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'total',
    label: i18n('entities.sellItem.fields.total'),
    schema: schemas.decimal(
      i18n('entities.sellItem.fields.total'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.sellItem.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.sellItem.fields.shop'),
      {},
    ),
  },
];