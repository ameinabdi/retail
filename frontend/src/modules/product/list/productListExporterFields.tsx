import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.product.fields.id'),
  },
  {
    name: 'productName',
    label: i18n('entities.product.fields.productName'),
  },
  {
    name: 'productSerialNumber',
    label: i18n('entities.product.fields.productSerialNumber'),
  },
  {
    name: 'productQuantity',
    label: i18n('entities.product.fields.productQuantity'),
  },
  {
    name: 'productPrice',
    label: i18n('entities.product.fields.productPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'purchaseDate',
    label: i18n('entities.product.fields.purchaseDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'productPhoto',
    label: i18n('entities.product.fields.productPhoto'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'shop',
    label: i18n('entities.product.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.product.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.product.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
