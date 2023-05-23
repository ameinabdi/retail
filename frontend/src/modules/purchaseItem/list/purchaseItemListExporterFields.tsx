import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.purchaseItem.fields.id'),
  },
  {
    name: 'product',
    label: i18n('entities.purchaseItem.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'itemName',
    label: i18n('entities.purchaseItem.fields.itemName'),
  },
  {
    name: 'costPrice',
    label: i18n('entities.purchaseItem.fields.costPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'quantity',
    label: i18n('entities.purchaseItem.fields.quantity'),
  },
  {
    name: 'sellingPrice',
    label: i18n('entities.purchaseItem.fields.sellingPrice'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'totalPrice',
    label: i18n('entities.purchaseItem.fields.totalPrice'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'shop',
    label: i18n('entities.purchaseItem.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.purchaseItem.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.purchaseItem.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
