import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/purchase/list/purchaseListActions';
import selectors from 'src/modules/purchase/list/purchaseListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import SupplierAutocompleteFormItem from 'src/view/supplier/autocomplete/SupplierAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  supplier: yupFilterSchemas.relationToOne(
    i18n('entities.purchase.fields.supplier'),
  ),
  totalAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchase.fields.totalAmountRange'),
  ),
  paidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchase.fields.paidAmountRange'),
  ),
  balanceAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.purchase.fields.balanceAmountRange'),
  ),
  purchaseDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.purchase.fields.purchaseDateRange'),
  ),
  purchaseDatails: yupFilterSchemas.string(
    i18n('entities.purchase.fields.purchaseDatails'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.purchase.fields.shop'),
  ),
});

const emptyValues = {
  supplier: null,
  totalAmountRange: [],
  paidAmountRange: [],
  balanceAmountRange: [],
  purchaseDateRange: [],
  purchaseDatails: null,
  shop: null,
}

const previewRenders = {
  supplier: {
      label: i18n('entities.purchase.fields.supplier'),
      render: filterRenders.relationToOne(),
    },
  totalAmountRange: {
    label: i18n('entities.purchase.fields.totalAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paidAmountRange: {
    label: i18n('entities.purchase.fields.paidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  balanceAmountRange: {
    label: i18n('entities.purchase.fields.balanceAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  purchaseDateRange: {
    label: i18n('entities.purchase.fields.purchaseDateRange'),
    render: filterRenders.datetimeRange(),
  },
  purchaseDatails: {
    label: i18n('entities.purchase.fields.purchaseDatails'),
    render: filterRenders.generic(),
  },
  shop: {
      label: i18n('entities.purchase.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const PurchaseListFilter = (props) => {
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
                  <SupplierAutocompleteFormItem  
                    name="supplier"
                    label={i18n('entities.purchase.fields.supplier')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="totalAmountRange"
                    label={i18n('entities.purchase.fields.totalAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="paidAmountRange"
                    label={i18n('entities.purchase.fields.paidAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="balanceAmountRange"
                    label={i18n('entities.purchase.fields.balanceAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="purchaseDateRange"
                    label={i18n('entities.purchase.fields.purchaseDateRange')}    
                    showTime
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="purchaseDatails"
                    label={i18n('entities.purchase.fields.purchaseDatails')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.purchase.fields.shop')}        
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

export default PurchaseListFilter;