import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import shopEnumerators from 'src/modules/shop/shopEnumerators';

export default [
  {
    name: 'shopName',
    label: i18n('entities.shop.fields.shopName'),
    schema: schemas.string(
      i18n('entities.shop.fields.shopName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'shopTelephone',
    label: i18n('entities.shop.fields.shopTelephone'),
    schema: schemas.string(
      i18n('entities.shop.fields.shopTelephone'),
      {},
    ),
  },
  {
    name: 'shopCurrency',
    label: i18n('entities.shop.fields.shopCurrency'),
    schema: schemas.enumerator(
      i18n('entities.shop.fields.shopCurrency'),
      {
        "options": shopEnumerators.shopCurrency
      },
    ),
  },
  {
    name: 'shopAddress',
    label: i18n('entities.shop.fields.shopAddress'),
    schema: schemas.string(
      i18n('entities.shop.fields.shopAddress'),
      {},
    ),
  },
];