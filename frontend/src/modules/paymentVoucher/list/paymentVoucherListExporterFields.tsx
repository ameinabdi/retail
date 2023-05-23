import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.paymentVoucher.fields.id'),
  },
  {
    name: 'supplier',
    label: i18n('entities.paymentVoucher.fields.supplier'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'unPaidAmount',
    label: i18n('entities.paymentVoucher.fields.unPaidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.paymentVoucher.fields.paidAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.paymentVoucher.fields.balanceAmount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paymentNote',
    label: i18n('entities.paymentVoucher.fields.paymentNote'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.paymentVoucher.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.paymentVoucher.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
