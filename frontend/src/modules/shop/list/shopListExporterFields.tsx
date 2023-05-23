import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.shop.fields.id'),
  },
  {
    name: 'shopName',
    label: i18n('entities.shop.fields.shopName'),
  },
  {
    name: 'shopTelephone',
    label: i18n('entities.shop.fields.shopTelephone'),
  },
  {
    name: 'shopCurrency',
    label: i18n('entities.shop.fields.shopCurrency'),
  },
  {
    name: 'shopAddress',
    label: i18n('entities.shop.fields.shopAddress'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.shop.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.shop.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
