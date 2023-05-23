import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import supplierEnumerators from 'src/modules/supplier/supplierEnumerators';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  supplierName: yupFormSchemas.string(
    i18n('entities.supplier.fields.supplierName'),
    {
      "required": true
    },
  ),
  supplierType: yupFormSchemas.enumerator(
    i18n('entities.supplier.fields.supplierType'),
    {
      "options": supplierEnumerators.supplierType
    },
  ),
  supplierTelephone: yupFormSchemas.string(
    i18n('entities.supplier.fields.supplierTelephone'),
    {},
  ),
  supplierAddress: yupFormSchemas.string(
    i18n('entities.supplier.fields.supplierAddress'),
    {},
  ),
  initialBalance: yupFormSchemas.decimal(
    i18n('entities.supplier.fields.initialBalance'),
    {},
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.supplier.fields.shop'),
    {},
  ),
});

const SupplierForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      supplierName: record.supplierName,
      supplierType: record.supplierType,
      supplierTelephone: record.supplierTelephone,
      supplierAddress: record.supplierAddress,
      initialBalance: record.initialBalance,
      shop: record.shop,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="supplierName"
            label={i18n('entities.supplier.fields.supplierName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <SelectFormItem
            name="supplierType"
            label={i18n('entities.supplier.fields.supplierType')}
            options={supplierEnumerators.supplierType.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.supplier.enumerators.supplierType.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="supplierTelephone"
            label={i18n('entities.supplier.fields.supplierTelephone')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="supplierAddress"
            label={i18n('entities.supplier.fields.supplierAddress')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="initialBalance"
            label={i18n('entities.supplier.fields.initialBalance')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.supplier.fields.shop')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SupplierForm;
