import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/receiptVoucher/list/receiptVoucherListActions';
import selectors from 'src/modules/receiptVoucher/list/receiptVoucherListSelectors';
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
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.receiptVoucher.fields.customer'),
  ),
  unpaidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.receiptVoucher.fields.unpaidAmountRange'),
  ),
  paidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.receiptVoucher.fields.paidAmountRange'),
  ),
  balanceAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.receiptVoucher.fields.balanceAmountRange'),
  ),
  receiptNote: yupFilterSchemas.string(
    i18n('entities.receiptVoucher.fields.receiptNote'),
  ),
});

const emptyValues = {
  customer: null,
  unpaidAmountRange: [],
  paidAmountRange: [],
  balanceAmountRange: [],
  receiptNote: null,
}

const previewRenders = {
  customer: {
      label: i18n('entities.receiptVoucher.fields.customer'),
      render: filterRenders.relationToOne(),
    },
  unpaidAmountRange: {
    label: i18n('entities.receiptVoucher.fields.unpaidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paidAmountRange: {
    label: i18n('entities.receiptVoucher.fields.paidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  balanceAmountRange: {
    label: i18n('entities.receiptVoucher.fields.balanceAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  receiptNote: {
    label: i18n('entities.receiptVoucher.fields.receiptNote'),
    render: filterRenders.generic(),
  },
}

const ReceiptVoucherListFilter = (props) => {
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
                    label={i18n('entities.receiptVoucher.fields.customer')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="unpaidAmountRange"
                    label={i18n('entities.receiptVoucher.fields.unpaidAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="paidAmountRange"
                    label={i18n('entities.receiptVoucher.fields.paidAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="balanceAmountRange"
                    label={i18n('entities.receiptVoucher.fields.balanceAmountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="receiptNote"
                    label={i18n('entities.receiptVoucher.fields.receiptNote')}      
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

export default ReceiptVoucherListFilter;