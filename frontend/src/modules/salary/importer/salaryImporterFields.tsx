import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'employee',
    label: i18n('entities.salary.fields.employee'),
    schema: schemas.relationToOne(
      i18n('entities.salary.fields.employee'),
      {},
    ),
  },
  {
    name: 'basicSalary',
    label: i18n('entities.salary.fields.basicSalary'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.basicSalary'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'allowanceSalary',
    label: i18n('entities.salary.fields.allowanceSalary'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.allowanceSalary'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'totalSalary',
    label: i18n('entities.salary.fields.totalSalary'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.totalSalary'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'advance',
    label: i18n('entities.salary.fields.advance'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.advance'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'netSalary',
    label: i18n('entities.salary.fields.netSalary'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.netSalary'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paidSalary',
    label: i18n('entities.salary.fields.paidSalary'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.paidSalary'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'balance',
    label: i18n('entities.salary.fields.balance'),
    schema: schemas.decimal(
      i18n('entities.salary.fields.balance'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'account',
    label: i18n('entities.salary.fields.account'),
    schema: schemas.relationToOne(
      i18n('entities.salary.fields.account'),
      {},
    ),
  },
  {
    name: 'salaryDate',
    label: i18n('entities.salary.fields.salaryDate'),
    schema: schemas.date(
      i18n('entities.salary.fields.salaryDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'shop',
    label: i18n('entities.salary.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.salary.fields.shop'),
      {},
    ),
  },
];