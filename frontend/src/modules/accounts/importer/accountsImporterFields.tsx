import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import accountsEnumerators from 'src/modules/accounts/accountsEnumerators';

export default [
  {
    name: 'account',
    label: i18n('entities.accounts.fields.account'),
    schema: schemas.string(
      i18n('entities.accounts.fields.account'),
      {},
    ),
  },
  {
    name: 'type',
    label: i18n('entities.accounts.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.accounts.fields.type'),
      {
        "options": accountsEnumerators.type
      },
    ),
  },
  {
    name: 'openBalance',
    label: i18n('entities.accounts.fields.openBalance'),
    schema: schemas.decimal(
      i18n('entities.accounts.fields.openBalance'),
      {
        "scale": 2
      },
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.accounts.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.accounts.fields.shop'),
      {},
    ),
  },
];