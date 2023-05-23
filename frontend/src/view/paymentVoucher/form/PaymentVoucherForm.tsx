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
import SupplierAutocompleteFormItem from 'src/view/supplier/autocomplete/SupplierBalanceAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';

const schema = yup.object().shape({
  supplier: yupFormSchemas.relationToOne(
    i18n('entities.paymentVoucher.fields.supplier'),
    {},
  ),
  unPaidAmount: yupFormSchemas.decimal(
    i18n('entities.paymentVoucher.fields.unPaidAmount'),
    {
      "scale": 2
    },
  ),
  paidAmount: yupFormSchemas.decimal(
    i18n('entities.paymentVoucher.fields.paidAmount'),
    {
      "scale": 2
    },
  ),
  balanceAmount: yupFormSchemas.decimal(
    i18n('entities.paymentVoucher.fields.balanceAmount'),
    {
      "scale": 2
    },
  ),
  paymentNote: yupFormSchemas.string(
    i18n('entities.paymentVoucher.fields.paymentNote'),
    {},
  ),
  paymentDate: yupFormSchemas.date(
    i18n('entities.paymentVoucher.fields.paymentDate'),
    {
      required:true
    },
  ),
});

const PaymentVoucherForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      supplier: record.supplier,
      unPaidAmount: record.unPaidAmount,
      paidAmount: record.paidAmount,
      balanceAmount: record.balanceAmount,
      paymentNote: record.paymentNote,
      paymentate: record.paymentate ? moment(record.paymentate) : null,

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
  const supplier = form.watch('supplier')?.data
  const onSubmit = (values) => {
    const updatedValue = {
      ...values,
      unPaidAmount: supplier?.totalBalance,
      balanceAmount:parseFloat(supplier?.totalBalance)-parseFloat(form.watch('paidAmount'))
    }
    props.onSubmit(props?.record?.id, updatedValue);
  };
  console.log('ssseee', form.watch('supplier'))

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SupplierAutocompleteFormItem  
            name="supplier"
            label={i18n('entities.paymentVoucher.fields.supplier')}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="unPaidAmount"
            label={i18n('entities.paymentVoucher.fields.unPaidAmount')}  
            required={false}
            layout={formItemLayout}
            value={supplier?.totalBalance}
            disabled
          />
          <InputFormItem
            name="paidAmount"
            label={i18n('entities.paymentVoucher.fields.paidAmount')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="balanceAmount"
            label={i18n('entities.paymentVoucher.fields.balanceAmount')}  
            required={false}
            layout={formItemLayout}
            value={parseFloat(supplier?.totalBalance)-parseFloat(form.watch('paidAmount'))}
            disabled
          />
          <TextAreaFormItem
            name="paymentNote"
            label={i18n('entities.paymentVoucher.fields.paymentNote')}  
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="paymentDate"
            label={i18n('entities.paymentVoucher.fields.paymentDate')}
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

export default PaymentVoucherForm;
