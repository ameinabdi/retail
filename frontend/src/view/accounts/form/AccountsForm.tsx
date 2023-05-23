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
import accountsEnumerators from 'src/modules/accounts/accountsEnumerators';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  account: yupFormSchemas.string(
    i18n('entities.accounts.fields.account'),
    {},
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.accounts.fields.type'),
    {
      "options": accountsEnumerators.type
    },
  ),
  openBalance: yupFormSchemas.decimal(
    i18n('entities.accounts.fields.openBalance'),
    {
      "scale": 2
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.accounts.fields.shop'),
    {},
  ),
});

const AccountsForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      account: record.account,
      type: record.type,
      openBalance: record.openBalance,
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
            name="account"
            label={i18n('entities.accounts.fields.account')}  
            required={false}
            layout={formItemLayout}
            autoFocus
          />
          <SelectFormItem
            name="type"
            label={i18n('entities.accounts.fields.type')}
            options={accountsEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.accounts.enumerators.type.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="openBalance"
            label={i18n('entities.accounts.fields.openBalance')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.accounts.fields.shop')}
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

export default AccountsForm;
