import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.advance.fields.id'),
  },
  {
    name: 'employee',
    label: i18n('entities.advance.fields.employee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'amount',
    label: i18n('entities.advance.fields.amount'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'note',
    label: i18n('entities.advance.fields.note'),
  },
  {
    name: 'advanceDate',
    label: i18n('entities.advance.fields.advanceDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'account',
    label: i18n('entities.advance.fields.account'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'shop',
    label: i18n('entities.advance.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.advance.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.advance.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
