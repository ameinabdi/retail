import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sell/list/sellListActions';
import selectors from 'src/modules/sell/list/sellListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.sell.fields.customer'),
  ),
  sellDateRange: yupFilterSchemas.dateRange(
    i18n('entities.sell.fields.sellDateRange'),
  ),
  sellDetails: yupFilterSchemas.string(
    i18n('entities.sell.fields.sellDetails'),
  ),
  totalAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.sell.fields.totalAmountRange'),
  ),
  paidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.sell.fields.paidAmountRange'),
  ),
  balanceAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.sell.fields.balanceAmountRange'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.sell.fields.shop'),
  ),
});

const emptyValues = {
  customer: null,
  sellDateRange: [],
  sellDetails: null,
  totalAmountRange: [],
  paidAmountRange: [],
  balanceAmountRange: [],
  shop: null,
}

const previewRenders = {
  customer: {
      label: i18n('entities.sell.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  sellDateRange: {
    label: i18n('entities.sell.fields.sellDateRange'),
    render: filterRenders.dateRange(),
  },
  sellDetails: {
    label: i18n('entities.sell.fields.sellDetails'),
    render: filterRenders.generic(),
  },
  totalAmountRange: {
    label: i18n('entities.sell.fields.totalAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paidAmountRange: {
    label: i18n('entities.sell.fields.paidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  balanceAmountRange: {
    label: i18n('entities.sell.fields.balanceAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  shop: {
      label: i18n('entities.sell.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const SellListFilter = (props) => {
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
                  <CustomerAutocompleteFormItem  
                    name="customer"
                    label={i18n('entities.sell.fields.customer')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="sellDateRange"
                    label={i18n('entities.sell.fields.sellDateRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.sell.fields.shop')}        
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

export default SellListFilter;