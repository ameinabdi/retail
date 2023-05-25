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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AccountsAutocompleteFormItem from 'src/view/accounts/autocomplete/AccountsAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  employee: yupFormSchemas.relationToOne(
    i18n('entities.salary.fields.employee'),
    {},
  ),
  basicSalary: yupFormSchemas.decimal(
    i18n('entities.salary.fields.basicSalary'),
    {
      "scale": 2
    },
  ),
  allowanceSalary: yupFormSchemas.decimal(
    i18n('entities.salary.fields.allowanceSalary'),
    {
      "scale": 2
    },
  ),
  totalSalary: yupFormSchemas.decimal(
    i18n('entities.salary.fields.totalSalary'),
    {
      "scale": 2
    },
  ),
  advance: yupFormSchemas.decimal(
    i18n('entities.salary.fields.advance'),
    {
      "scale": 2
    },
  ),
  netSalary: yupFormSchemas.decimal(
    i18n('entities.salary.fields.netSalary'),
    {
      "scale": 2
    },
  ),
  paidSalary: yupFormSchemas.decimal(
    i18n('entities.salary.fields.paidSalary'),
    {
      "scale": 2
    },
  ),
  balance: yupFormSchemas.decimal(
    i18n('entities.salary.fields.balance'),
    {
      "scale": 2
    },
  ),
  account: yupFormSchemas.relationToOne(
    i18n('entities.salary.fields.account'),
    {},
  ),
  salaryDate: yupFormSchemas.date(
    i18n('entities.salary.fields.salaryDate'),
    {
      "required": true
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.salary.fields.shop'),
    {},
  ),
});

const SalaryForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      employee: record.employee,
      basicSalary: record.basicSalary,
      allowanceSalary: record.allowanceSalary,
      totalSalary: record.totalSalary,
      advance: record.advance,
      netSalary: record.netSalary,
      paidSalary: record.paidSalary,
      balance: record.balance,
      account: record.account,
      salaryDate: record.salaryDate ? moment(record.salaryDate, 'YYYY-MM-DD') : null,
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
            label={i18n('entities.salary.fields.employee')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="basicSalary"
            label={i18n('entities.salary.fields.basicSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="allowanceSalary"
            label={i18n('entities.salary.fields.allowanceSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="totalSalary"
            label={i18n('entities.salary.fields.totalSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="advance"
            label={i18n('entities.salary.fields.advance')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="netSalary"
            label={i18n('entities.salary.fields.netSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="paidSalary"
            label={i18n('entities.salary.fields.paidSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="balance"
            label={i18n('entities.salary.fields.balance')}  
            required={false}
            layout={formItemLayout}
          />
          <AccountsAutocompleteFormItem  
            name="account"
            label={i18n('entities.salary.fields.account')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="salaryDate"
            label={i18n('entities.salary.fields.salaryDate')}
            required={true}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.salary.fields.shop')}
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

export default SalaryForm;
