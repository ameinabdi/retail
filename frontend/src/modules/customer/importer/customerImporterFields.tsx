import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fullName',
    label: i18n('entities.customer.fields.fullName'),
    schema: schemas.string(
      i18n('entities.customer.fields.fullName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'telephone',
    label: i18n('entities.customer.fields.telephone'),
    schema: schemas.string(
      i18n('entities.customer.fields.telephone'),
      {},
    ),
  },
  {
    name: 'initialBalance',
    label: i18n('entities.customer.fields.initialBalance'),
    schema: schemas.decimal(
      i18n('entities.customer.fields.initialBalance'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.customer.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.customer.fields.shop'),
      {},
    ),
  },
];