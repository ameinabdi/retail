import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sellItem/list/sellItemListActions';
import selectors from 'src/modules/sellItem/list/sellItemListSelectors';
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
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  itemName: yupFilterSchemas.string(
    i18n('entities.sellItem.fields.itemName'),
  ),
  product: yupFilterSchemas.relationToOne(
    i18n('entities.sellItem.fields.product'),
  ),
  priceRange: yupFilterSchemas.decimalRange(
    i18n('entities.sellItem.fields.priceRange'),
  ),
  quantityRange: yupFilterSchemas.decimalRange(
    i18n('entities.sellItem.fields.quantityRange'),
  ),
  totalRange: yupFilterSchemas.decimalRange(
    i18n('entities.sellItem.fields.totalRange'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.sellItem.fields.shop'),
  ),
});

const emptyValues = {
  itemName: null,
  product: null,
  priceRange: [],
  quantityRange: [],
  totalRange: [],
  shop: null,
}

const previewRenders = {
  itemName: {
    label: i18n('entities.sellItem.fields.itemName'),
    render: filterRenders.generic(),
  },
  product: {
      label: i18n('entities.sellItem.fields.product'),
      render: filterRenders.relationToOne(),
    },
  priceRange: {
    label: i18n('entities.sellItem.fields.priceRange'),
    render: filterRenders.decimalRange(2),
  },
  quantityRange: {
    label: i18n('entities.sellItem.fields.quantityRange'),
    render: filterRenders.decimalRange(2),
  },
  totalRange: {
    label: i18n('entities.sellItem.fields.totalRange'),
    render: filterRenders.decimalRange(2),
  },
  shop: {
      label: i18n('entities.sellItem.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const SellItemListFilter = (props) => {
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
                    name="itemName"
                    label={i18n('entities.sellItem.fields.itemName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ProductAutocompleteFormItem  
                    name="product"
                    label={i18n('entities.sellItem.fields.product')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="priceRange"
                    label={i18n('entities.sellItem.fields.priceRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="quantityRange"
                    label={i18n('entities.sellItem.fields.quantityRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="totalRange"
                    label={i18n('entities.sellItem.fields.totalRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.sellItem.fields.shop')}        
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

export default SellItemListFilter;