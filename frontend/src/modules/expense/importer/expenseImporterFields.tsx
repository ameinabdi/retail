import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'supplier',
    label: i18n('entities.expense.fields.supplier'),
    schema: schemas.relationToOne(
      i18n('entities.expense.fields.supplier'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.expense.fields.description'),
    schema: schemas.string(
      i18n('entities.expense.fields.description'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.expense.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.expense.fields.amount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'expenseDate',
    label: i18n('entities.expense.fields.expenseDate'),
    schema: schemas.date(
      i18n('entities.expense.fields.expenseDate'),
      {
        "required": true
      },
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'shop',
    label: i18n('entities.expense.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.expense.fields.shop'),
      {},
    ),
  },
];