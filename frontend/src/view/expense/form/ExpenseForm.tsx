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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import SupplierAutocompleteFormItem from 'src/view/supplier/autocomplete/SupplierAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  supplier: yupFormSchemas.relationToOne(
    i18n('entities.expense.fields.supplier'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.expense.fields.description'),
    {},
  ),
  amount: yupFormSchemas.decimal(
    i18n('entities.expense.fields.amount'),
    {
      "scale": 2
    },
  ),
  expenseDate: yupFormSchemas.date(
    i18n('entities.expense.fields.expenseDate'),
    {
      "required": true
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.expense.fields.shop'),
    {},
  ),
});

const ExpenseForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      supplier: record.supplier,
      description: record.description,
      amount: record.amount,
      expenseDate: record.expenseDate ? moment(record.expenseDate, 'YYYY-MM-DD') : null,
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
          <SupplierAutocompleteFormItem  
            name="supplier"
            label={i18n('entities.expense.fields.supplier')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="description"
            label={i18n('entities.expense.fields.description')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="amount"
            label={i18n('entities.expense.fields.amount')}  
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="expenseDate"
            label={i18n('entities.expense.fields.expenseDate')}
            required={true}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.expense.fields.shop')}
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

export default ExpenseForm;
