import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.salary.fields.id'),
  },
  {
    name: 'employee',
    label: i18n('entities.salary.fields.employee'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'basicSalary',
    label: i18n('entities.salary.fields.basicSalary'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'allowanceSalary',
    label: i18n('entities.salary.fields.allowanceSalary'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'totalSalary',
    label: i18n('entities.salary.fields.totalSalary'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'advance',
    label: i18n('entities.salary.fields.advance'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'netSalary',
    label: i18n('entities.salary.fields.netSalary'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'paidSalary',
    label: i18n('entities.salary.fields.paidSalary'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'balance',
    label: i18n('entities.salary.fields.balance'),
    render: exporterRenders.decimal(2),
  },
  {
    name: 'account',
    label: i18n('entities.salary.fields.account'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'salaryDate',
    label: i18n('entities.salary.fields.salaryDate'),
  },
  {
    name: 'shop',
    label: i18n('entities.salary.fields.shop'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.salary.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.salary.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
