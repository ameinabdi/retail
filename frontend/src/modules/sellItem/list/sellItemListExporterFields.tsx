import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.sellItem.fields.id'),
  },
  {
    name: 'itemName',
    label: i18n('entities.sellItem.fields.itemName'),
  },
  {
    name: 'product',
    label: i18n('entities.sellItem.fields.product'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'price',
    label: i18n('entities.sellItem.fields.price'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'quantity',
    label: i18n('entities.sellItem.fields.quantity'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'total',
    label: i18n('entities.sellItem.fields.total'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'shop',
    label: i18n('entities.sellItem.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.sellItem.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.sellItem.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
