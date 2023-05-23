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
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  itemName: yupFormSchemas.string(
    i18n('entities.sellItem.fields.itemName'),
    {},
  ),
  product: yupFormSchemas.relationToOne(
    i18n('entities.sellItem.fields.product'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.sellItem.fields.price'),
    {
      "scale": 2
    },
  ),
  quantity: yupFormSchemas.decimal(
    i18n('entities.sellItem.fields.quantity'),
    {
      "scale": 2
    },
  ),
  total: yupFormSchemas.decimal(
    i18n('entities.sellItem.fields.total'),
    {
      "scale": 2
    },
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('entities.sellItem.fields.shop'),
    {},
  ),
});

const SellItemForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      itemName: record.itemName,
      product: record.product,
      price: record.price,
      quantity: record.quantity,
      total: record.total,
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
            name="itemName"
            label={i18n('entities.sellItem.fields.itemName')}  
            required={false}
            layout={formItemLayout}
            autoFocus
          />
          <ProductAutocompleteFormItem  
            name="product"
            label={i18n('entities.sellItem.fields.product')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="price"
            label={i18n('entities.sellItem.fields.price')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="quantity"
            label={i18n('entities.sellItem.fields.quantity')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="total"
            label={i18n('entities.sellItem.fields.total')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem  
            name="shop"
            label={i18n('entities.sellItem.fields.shop')}
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

export default SellItemForm;
