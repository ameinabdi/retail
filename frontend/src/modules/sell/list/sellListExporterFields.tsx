import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.sell.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.sell.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'sellDate',
    label: i18n('entities.sell.fields.sellDate'),
  },
  {
    name: 'sellDetails',
    label: i18n('entities.sell.fields.sellDetails'),
  },
  {
    name: 'totalAmount',
    label: i18n('entities.sell.fields.totalAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.sell.fields.paidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.sell.fields.balanceAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'shop',
    label: i18n('entities.sell.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.sell.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.sell.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
