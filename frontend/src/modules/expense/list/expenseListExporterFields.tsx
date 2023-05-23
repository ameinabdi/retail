import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.expense.fields.id'),
  },
  {
    name: 'supplier',
    label: i18n('entities.expense.fields.supplier'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'description',
    label: i18n('entities.expense.fields.description'),
  },
  {
    name: 'amount',
    label: i18n('entities.expense.fields.amount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'expenseDate',
    label: i18n('entities.expense.fields.expenseDate'),
  },
  {
    name: 'shop',
    label: i18n('entities.expense.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.expense.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.expense.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
