import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.accounts.fields.id'),
  },
  {
    name: 'account',
    label: i18n('entities.accounts.fields.account'),
  },
  {
    name: 'type',
    label: i18n('entities.accounts.fields.type'),
  },
  {
    name: 'openBalance',
    label: i18n('entities.accounts.fields.openBalance'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'shop',
    label: i18n('entities.accounts.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.accounts.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.accounts.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
