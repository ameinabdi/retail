import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.supplier.fields.id'),
  },
  {
    name: 'supplierName',
    label: i18n('entities.supplier.fields.supplierName'),
  },
  {
    name: 'supplierType',
    label: i18n('entities.supplier.fields.supplierType'),
  },
  {
    name: 'supplierTelephone',
    label: i18n('entities.supplier.fields.supplierTelephone'),
  },
  {
    name: 'supplierAddress',
    label: i18n('entities.supplier.fields.supplierAddress'),
  },
  {
    name: 'initialBalance',
    label: i18n('entities.supplier.fields.initialBalance'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'shop',
    label: i18n('entities.supplier.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.supplier.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.supplier.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
