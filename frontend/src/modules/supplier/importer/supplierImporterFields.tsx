import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import supplierEnumerators from 'src/modules/supplier/supplierEnumerators';

export default [
  {
    name: 'supplierName',
    label: i18n('entities.supplier.fields.supplierName'),
    schema: schemas.string(
      i18n('entities.supplier.fields.supplierName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'supplierType',
    label: i18n('entities.supplier.fields.supplierType'),
    schema: schemas.enumerator(
      i18n('entities.supplier.fields.supplierType'),
      {
        "options": supplierEnumerators.supplierType
      },
    ),
  },
  {
    name: 'supplierTelephone',
    label: i18n('entities.supplier.fields.supplierTelephone'),
    schema: schemas.string(
      i18n('entities.supplier.fields.supplierTelephone'),
      {},
    ),
  },
  {
    name: 'supplierAddress',
    label: i18n('entities.supplier.fields.supplierAddress'),
    schema: schemas.string(
      i18n('entities.supplier.fields.supplierAddress'),
      {},
    ),
  },
  {
    name: 'initialBalance',
    label: i18n('entities.supplier.fields.initialBalance'),
    schema: schemas.decimal(
      i18n('entities.supplier.fields.initialBalance'),
      {},
    ),
  },
  {
    name: 'shop',
    label: i18n('entities.supplier.fields.shop'),
    schema: schemas.relationToOne(
      i18n('entities.supplier.fields.shop'),
      {},
    ),
  },
];