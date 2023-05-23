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
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  productName: yupFormSchemas.string(
    i18n('entities.product.fields.productName'),
    {
      "required": true
    },
  ),
  productSerialNumber: yupFormSchemas.string(
    i18n('entities.product.fields.productSerialNumber'),
    {},
  ),
  productQuantity: yupFormSchemas.integer(
    i18n('entities.product.fields.productQuantity'),
    {
    },
  ),
  productPrice: yupFormSchemas.decimal(
    i18n('entities.product.fields.productPrice'),
    {
      "scale": 2
    },
  ),
  purchaseDate: yupFormSchemas.datetime(
    i18n('entities.product.fields.purchaseDate'),
    {},
  ),
  productPhoto: yupFormSchemas.images(
    i18n('entities.product.fields.productPhoto'),
    {
      "max": 1
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.product.fields.shop'),
    {
      "required": true
    },
  ),
});

const ProductForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      productName: record.productName,
      productSerialNumber: record.productSerialNumber,
      productQuantity: record.productQuantity,
      productPrice: record.productPrice,
      purchaseDate: record.purchaseDate ? moment(record.purchaseDate) : null,
      productPhoto: record.productPhoto || [],
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
            name="productName"
            label={i18n('entities.product.fields.productName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="productSerialNumber"
            label={i18n('entities.product.fields.productSerialNumber')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="productPrice"
            label={i18n('entities.product.fields.productPrice')}  
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="purchaseDate"
            label={i18n('entities.product.fields.purchaseDate')}
            required={false}
            showTime
            layout={formItemLayout}
          />
          <ImagesFormItem
            name="productPhoto"
            label={i18n('entities.product.fields.productPhoto')}
            required={false}
            storage={Storage.values.productProductPhoto}
            max={1}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.product.fields.shop')}
            required={true}
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

export default ProductForm;
