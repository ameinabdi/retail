import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/paymentVoucher/list/paymentVoucherListActions';
import selectors from 'src/modules/paymentVoucher/list/paymentVoucherListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import SupplierAutocompleteFormItem from 'src/view/supplier/autocomplete/SupplierAutocompleteFormItem';

const schema = yup.object().shape({
  supplier: yupFilterSchemas.relationToOne(
    i18n('entities.paymentVoucher.fields.supplier'),
  ),
  unPaidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.paymentVoucher.fields.unPaidAmountRange'),
  ),
  paidAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.paymentVoucher.fields.paidAmountRange'),
  ),
  balanceAmountRange: yupFilterSchemas.decimalRange(
    i18n('entities.paymentVoucher.fields.balanceAmountRange'),
  ),
  paymentNote: yupFilterSchemas.string(
    i18n('entities.paymentVoucher.fields.paymentNote'),
  ),
});

const emptyValues = {
  supplier: null,
  unPaidAmountRange: [],
  paidAmountRange: [],
  balanceAmountRange: [],
  paymentNote: null,
}

const previewRenders = {
  supplier: {
      label: i18n('entities.paymentVoucher.fields.supplier'),
      render: filterRenders.relationToOne(),
    },
  unPaidAmountRange: {
    label: i18n('entities.paymentVoucher.fields.unPaidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paidAmountRange: {
    label: i18n('entities.paymentVoucher.fields.paidAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  balanceAmountRange: {
    label: i18n('entities.paymentVoucher.fields.balanceAmountRange'),
    render: filterRenders.decimalRange(2),
  },
  paymentNote: {
    label: i18n('entities.paymentVoucher.fields.paymentNote'),
    render: filterRenders.generic(),
  },
}

const PaymentVoucherListFilter = (props) => {
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
                    label={i18n('entities.paymentVoucher.fields.supplier')}        
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

export default PaymentVoucherListFilter;