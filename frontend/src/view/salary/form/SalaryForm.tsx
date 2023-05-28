import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form, Col, Row,  } from 'antd';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItemWithSalary';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AccountsAutocompleteFormItem from 'src/view/accounts/autocomplete/AccountsAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import BigNumber from 'bignumber.js';

const schema = yup.object().shape({
  employee: yupFormSchemas.relationToOne(
    i18n('entities.salary.fields.employee'),
    {
      "required": true
    },
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
    {
      "required": true
    },
  ),
  salaryDate: yupFormSchemas.date(
    i18n('entities.salary.fields.salaryDate'),
    {
      "required": true
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.salary.fields.shop'),
    {
      "required": true
    },
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

  const employe = form.getValues('employee')?.data
  const totalSalary:any = parseFloat(employe?.basicSalary)+parseFloat(employe?.allowanceSalary)
  const advance:any = BigNumber(employe?.totalBalance).toFixed(2)
  const netSalary:any = (totalSalary)-(advance)
  const balance = (netSalary)-parseFloat(form.getValues('paidSalary'))

  const onSubmit = (values) => {
    const updatedValue = {
      ...values,
      basicSalary:employe?.basicSalary,
      allowanceSalary:employe?.allowanceSalary,
      totalSalary,
      advance,
      netSalary,
      balance
    }
    props.onSubmit(props?.record?.id, updatedValue);
  };
  const ColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 6,
    lg: 6,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };
  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Row gutter={16}>
         <Col {...ColumnsResponsiveProps}>
          <UserAutocompleteFormItem  
            name="employee"
            label={i18n('entities.salary.fields.employee')}
            required={true}
            layout={formItemLayout}
          />
          </Col>
          <Col {...ColumnsResponsiveProps}>
          <InputFormItem
            name="basicSalary"
            label={i18n('entities.salary.fields.basicSalary')}  
            required={false}
            layout={formItemLayout}
            value={employe?.basicSalary}
            disabled
          />
           </Col>
          <Col {...ColumnsResponsiveProps}>
          <InputFormItem
            name="allowanceSalary"
            label={i18n('entities.salary.fields.allowanceSalary')}  
            required={false}
            layout={formItemLayout}
            value={employe?.allowanceSalary}
            disabled

          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <InputFormItem
            name="totalSalary"
            label={i18n('entities.salary.fields.totalSalary')}  
            required={false}
            layout={formItemLayout}
            value={totalSalary}
            disabled
         />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <InputFormItem
            name="advance"
            label={i18n('entities.salary.fields.advance')}  
            required={false}
            layout={formItemLayout}
            value={advance}
            disabled
          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <InputFormItem
            name="netSalary"
            label={i18n('entities.salary.fields.netSalary')}  
            required={false}
            layout={formItemLayout}
            value={netSalary}
            disabled
          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <InputNumberFormItem
            name="paidSalary"
            label={i18n('entities.salary.fields.paidSalary')}  
            required={false}
            layout={formItemLayout}
          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <InputFormItem
            name="balance"
            label={i18n('entities.salary.fields.balance')}  
            required={false}
            layout={formItemLayout}
            value={balance}
            disabled
          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <AccountsAutocompleteFormItem  
            name="account"
            label={i18n('entities.salary.fields.account')}
            required={false}
            layout={formItemLayout}
          />
           </Col>
          <Col {...ColumnsResponsiveProps}> 
          <DatePickerFormItem
            name="salaryDate"
            label={i18n('entities.salary.fields.salaryDate')}
            required={true}
            layout={formItemLayout}
          />
           </Col>
          <Col {...ColumnsResponsiveProps}>
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.salary.fields.shop')}
            required={false}
            layout={formItemLayout}
          />
          </Col>
          </Row>
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
