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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import shopEnumerators from 'src/modules/shop/shopEnumerators';

const schema = yup.object().shape({
  shopName: yupFormSchemas.string(
    i18n('entities.shop.fields.shopName'),
    {
      "required": true
    },
  ),
  shopTelephone: yupFormSchemas.string(
    i18n('entities.shop.fields.shopTelephone'),
    {},
  ),
  shopCurrency: yupFormSchemas.enumerator(
    i18n('entities.shop.fields.shopCurrency'),
    {
      "options": shopEnumerators.shopCurrency
    },
  ),
  shopAddress: yupFormSchemas.string(
    i18n('entities.shop.fields.shopAddress'),
    {},
  ),
});

const ShopForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      shopName: record.shopName,
      shopTelephone: record.shopTelephone,
      shopCurrency: record.shopCurrency,
      shopAddress: record.shopAddress,
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
            name="shopName"
            label={i18n('entities.shop.fields.shopName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="shopTelephone"
            label={i18n('entities.shop.fields.shopTelephone')}  
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="shopCurrency"
            label={i18n('entities.shop.fields.shopCurrency')}
            options={shopEnumerators.shopCurrency.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.shop.enumerators.shopCurrency.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="shopAddress"
            label={i18n('entities.shop.fields.shopAddress')}  
            required={false}
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

export default ShopForm;
