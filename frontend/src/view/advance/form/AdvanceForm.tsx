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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AccountsAutocompleteFormItem from 'src/view/accounts/autocomplete/AccountsAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  employee: yupFormSchemas.relationToOne(
    i18n('entities.advance.fields.employee'),
    {},
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.advance.fields.amount'),
    {
      "scale": 2
    },
  ),
  note: yupFormSchemas.string(
    i18n('entities.advance.fields.note'),
    {},
  ),
  advanceDate: yupFormSchemas.datetime(
    i18n('entities.advance.fields.advanceDate'),
    {},
  ),
  account: yupFormSchemas.relationToOne(
    i18n('entities.advance.fields.account'),
    {},
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.advance.fields.shop'),
    {},
  ),
});

const AdvanceForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      employee: record.employee,
      amount: record.amount,
      note: record.note,
      advanceDate: record.advanceDate ? moment(record.advanceDate) : null,
      account: record.account,
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
          <UserAutocompleteFormItem  
            name="employee"
            label={i18n('entities.advance.fields.employee')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="amount"
            label={i18n('entities.advance.fields.amount')}  
            required={false}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="note"
            label={i18n('entities.advance.fields.note')}  
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="advanceDate"
            label={i18n('entities.advance.fields.advanceDate')}
            required={false}
            showTime
            layout={formItemLayout}
          />
          <AccountsAutocompleteFormItem  
            name="account"
            label={i18n('entities.advance.fields.account')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.advance.fields.shop')}
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

export default AdvanceForm;
