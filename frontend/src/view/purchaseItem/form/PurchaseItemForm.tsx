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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  product: yupFormSchemas.relationToOne(
    i18n('entities.purchaseItem.fields.product'),
    {},
  ),
  itemName: yupFormSchemas.string(
    i18n('entities.purchaseItem.fields.itemName'),
    {},
  ),
  costPrice: yupFormSchemas.decimal(
    i18n('entities.purchaseItem.fields.costPrice'),
    {
      "scale": 2
    },
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.purchaseItem.fields.quantity'),
    {},
  ),
  sellingPrice: yupFormSchemas.decimal(
    i18n('entities.purchaseItem.fields.sellingPrice'),
    {
      "scale": 2
    },
  ),
  totalPrice: yupFormSchemas.decimal(
    i18n('entities.purchaseItem.fields.totalPrice'),
    {},
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.purchaseItem.fields.shop'),
    {},
  ),
});

const PurchaseItemForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      product: record.product,
      itemName: record.itemName,
      costPrice: record.costPrice,
      quantity: record.quantity,
      sellingPrice: record.sellingPrice,
      totalPrice: record.totalPrice,
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
          <ProductAutocompleteFormItem  
            name="product"
            label={i18n('entities.purchaseItem.fields.product')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="itemName"
            label={i18n('entities.purchaseItem.fields.itemName')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="costPrice"
            label={i18n('entities.purchaseItem.fields.costPrice')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="quantity"
            label={i18n('entities.purchaseItem.fields.quantity')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="sellingPrice"
            label={i18n('entities.purchaseItem.fields.sellingPrice')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="totalPrice"
            label={i18n('entities.purchaseItem.fields.totalPrice')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.purchaseItem.fields.shop')}
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

export default PurchaseItemForm;
