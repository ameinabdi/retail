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
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  fullName: yupFormSchemas.string(
    i18n('entities.customer.fields.fullName'),
    {
      "required": true
    },
  ),
  telephone: yupFormSchemas.string(
    i18n('entities.customer.fields.telephone'),
    {},
  ),
  initialBalance: yupFormSchemas.decimal(
    i18n('entities.customer.fields.initialBalance'),
    {
      "scale": 2
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.customer.fields.shop'),
    {},
  ),
});

const CustomerForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      fullName: record.fullName,
      telephone: record.telephone,
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
            name="fullName"
            label={i18n('entities.customer.fields.fullName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="telephone"
            label={i18n('entities.customer.fields.telephone')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="initialBalance"
            label={i18n('entities.customer.fields.initialBalance')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.customer.fields.shop')}
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

export default CustomerForm;
