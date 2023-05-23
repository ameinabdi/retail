import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.receiptVoucher.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.receiptVoucher.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'unpaidAmount',
    label: i18n('entities.receiptVoucher.fields.unpaidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.receiptVoucher.fields.paidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.receiptVoucher.fields.balanceAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'receiptNote',
    label: i18n('entities.receiptVoucher.fields.receiptNote'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.receiptVoucher.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.receiptVoucher.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
