import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'employee',
    label: i18n('entities.advance.fields.employee'),
    schema: schemas.relationToOne(
      i18n('entities.advance.fields.employee'),
      {},
    ),
  },
  {
    name: 'amount',
    label: i18n('entities.advance.fields.amount'),
    schema: schemas.decimal(
      i18n('entities.advance.fields.amount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'note',
    label: i18n('entities.advance.fields.note'),
    schema: schemas.string(
      i18n('entities.advance.fields.note'),
      {},
    ),
  },
  {
    name: 'advanceDate',
    label: i18n('entities.advance.fields.advanceDate'),
    schema: schemas.datetime(
      i18n('entities.advance.fields.advanceDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'account',
    label: i18n('entities.advance.fields.account'),
    schema: schemas.relationToOne(
      i18n('entities.advance.fields.account'),
      {},
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.advance.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.advance.fields.shop'),
      {},
    ),
  },
];