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
import CustomerBalanceAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerBalanceAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.receiptVoucher.fields.customer'),
    {},
  ),
  unpaidAmount: yupFormSchemas.decimal(
    i18n('entities.receiptVoucher.fields.unpaidAmount'),
    {
      "scale": 2
    },
  ),
  paidAmount: yupFormSchemas.decimal(
    i18n('entities.receiptVoucher.fields.paidAmount'),
    {
      "scale": 2
    },
  ),
  balanceAmount: yupFormSchemas.decimal(
    i18n('entities.receiptVoucher.fields.balanceAmount'),
    {
      "scale": 2
    },
  ),
  receiptNote: yupFormSchemas.string(
    i18n('entities.receiptVoucher.fields.receiptNote'),
    {},
  ),
  receiptDate: yupFormSchemas.date(
    i18n('entities.receiptVoucher.fields.receiptDate'),
    {
      required:true
    },
  ),
});

const ReceiptVoucherForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      customer: record.customer,
      unpaidAmount: record.unpaidAmount,
      paidAmount: record.paidAmount,
      balanceAmount: record.balanceAmount,
      receiptNote: record.receiptNote,
      receiptDate: record.receiptDate ? moment(record.receiptDate) : null,

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
  const customer  = form.watch('customer').data ?  form.watch('customer').data : form.watch('customer')
 const balance =parseFloat(form.watch('unpaidAmount'))-parseFloat(form.watch('paidAmount'))

  const onSubmit = (values) => {
    const updatedValue = {
      ...values,
      unpaidAmount: customer?.totalBalance,
      balanceAmount:parseFloat(customer.totalBalance)-parseFloat(form.watch('paidAmount'))
    }
    props.onSubmit(props?.record?.id, updatedValue);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CustomerBalanceAutocompleteFormItem  
            name="customer"
            label={i18n('entities.receiptVoucher.fields.customer')}
            disabled={true}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="unpaidAmount"
            label={i18n('entities.receiptVoucher.fields.unpaidAmount')}  
            required={false}
            layout={formItemLayout}
            disabled
          />
          <InputFormItem
            name="paidAmount"
            label={i18n('entities.receiptVoucher.fields.paidAmount')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="balanceAmount"
            label={i18n('entities.receiptVoucher.fields.balanceAmount')}  
            required={false}
            layout={formItemLayout}
            value={balance}
            disabled
          />
          <TextAreaFormItem
            name="receiptNote"
            label={i18n('entities.receiptVoucher.fields.receiptNote')}  
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="receiptDate"
            label={i18n('entities.receiptVoucher.fields.receiptDate')}
            required={true}
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

export default ReceiptVoucherForm;
