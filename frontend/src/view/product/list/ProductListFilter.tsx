import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/product/list/productListActions';
import selectors from 'src/modules/product/list/productListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  productName: yupFilterSchemas.string(
    i18n('entities.product.fields.productName'),
  ),
  productSerialNumber: yupFilterSchemas.string(
    i18n('entities.product.fields.productSerialNumber'),
  ),
  productPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.product.fields.productPriceRange'),
  ),
  purchaseDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.product.fields.purchaseDateRange'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.product.fields.shop'),
  ),
});

const emptyValues = {
  productName: null,
  productSerialNumber: null,
  productPriceRange: [],
  purchaseDateRange: [],
  shop: null,
}

const previewRenders = {
  productName: {
    label: i18n('entities.product.fields.productName'),
    render: filterRenders.generic(),
  },
  productSerialNumber: {
    label: i18n('entities.product.fields.productSerialNumber'),
    render: filterRenders.generic(),
  },
  productPriceRange: {
    label: i18n('entities.product.fields.productPriceRange'),
    render: filterRenders.decimalRange(2),
  },
  purchaseDateRange: {
    label: i18n('entities.product.fields.purchaseDateRange'),
    render: filterRenders.datetimeRange(),
  },
  shop: {
      label: i18n('entities.product.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const ProductListFilter = (props) => {
  const dispatch = useDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;
  return (
    <FilterWrapper>
      <Collapse
        activeKey={expanded ? 'filter' : undefined}
        expandIconPosition="right"
        ghost
        onChange={(value) => {
          setExpanded(Boolean(value.length));
        }}
      >
        <Collapse.Panel
          header={
            <FilterPreview             
              renders={previewRenders}
              values={rawFilter}
              expanded={expanded}
              onRemove={onRemove}
            />
          }
          key="filter"
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="productName"
                    label={i18n('entities.product.fields.productName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="productSerialNumber"
                    label={i18n('entities.product.fields.productSerialNumber')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.product.fields.shop')}        
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Collapse.Panel>
      </Collapse>
    </FilterWrapper>
  );
};

export default ProductListFilter;