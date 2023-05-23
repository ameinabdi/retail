import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'customer',
    label: i18n('entities.sell.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.sell.fields.customer'),
      {},
    ),
  },
  {
    name: 'sellDate',
    label: i18n('entities.sell.fields.sellDate'),
    schema: schemas.date(
      i18n('entities.sell.fields.sellDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'sellDetails',
    label: i18n('entities.sell.fields.sellDetails'),
    schema: schemas.string(
      i18n('entities.sell.fields.sellDetails'),
      {},
    ),
  },
  {
    name: 'totalAmount',
    label: i18n('entities.sell.fields.totalAmount'),
    schema: schemas.decimal(
      i18n('entities.sell.fields.totalAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'paidAmount',
    label: i18n('entities.sell.fields.paidAmount'),
    schema: schemas.decimal(
      i18n('entities.sell.fields.paidAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'balanceAmount',
    label: i18n('entities.sell.fields.balanceAmount'),
    schema: schemas.decimal(
      i18n('entities.sell.fields.balanceAmount'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.sell.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.sell.fields.shop'),
      {},
    ),
  },
];