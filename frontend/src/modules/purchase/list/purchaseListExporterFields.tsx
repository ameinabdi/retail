import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.purchase.fields.id'),
  },
  {
    name: 'supplier',
    label: i18n('entities.purchase.fields.supplier'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'totalAmount',
    label: i18n('entities.purchase.fields.totalAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.purchase.fields.paidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.purchase.fields.balanceAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'purchaseDate',
    label: i18n('entities.purchase.fields.purchaseDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'purchaseDatails',
    label: i18n('entities.purchase.fields.purchaseDatails'),
  },
  {
    name: 'shop',
    label: i18n('entities.purchase.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.purchase.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.purchase.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
