import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.customer.fields.id'),
  },
  {
    name: 'fullName',
    label: i18n('entities.customer.fields.fullName'),
  },
  {
    name: 'telephone',
    label: i18n('entities.customer.fields.telephone'),
  },
  {
    name: 'initialBalance',
    label: i18n('entities.customer.fields.initialBalance'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'shop',
    label: i18n('entities.customer.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.customer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.customer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
