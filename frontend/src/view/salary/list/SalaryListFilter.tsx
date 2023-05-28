import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/salary/list/salaryListActions';
import selectors from 'src/modules/salary/list/salaryListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import AccountsAutocompleteFormItem from 'src/view/accounts/autocomplete/AccountsAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  employee: yupFilterSchemas.relationToOne(
    i18n('entities.salary.fields.employee'),
  ),
  basicSalaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.basicSalaryRange'),
  ),
  allowanceSalaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.allowanceSalaryRange'),
  ),
  totalSalaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.totalSalaryRange'),
  ),
  advanceRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.advanceRange'),
  ),
  netSalaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.netSalaryRange'),
  ),
  paidSalaryRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.paidSalaryRange'),
  ),
  balanceRange: yupFilterSchemas.decimalRange(
    i18n('entities.salary.fields.balanceRange'),
  ),
  account: yupFilterSchemas.relationToOne(
    i18n('entities.salary.fields.account'),
  ),
  salaryDateRange: yupFilterSchemas.dateRange(
    i18n('entities.salary.fields.salaryDateRange'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.salary.fields.shop'),
  ),
});

const emptyValues = {
  employee: null,
  basicSalaryRange: [],
  allowanceSalaryRange: [],
  totalSalaryRange: [],
  advanceRange: [],
  netSalaryRange: [],
  paidSalaryRange: [],
  balanceRange: [],
  account: null,
  salaryDateRange: [],
  shop: null,
}

const previewRenders = {
  employee: {
    label: i18n('entities.salary.fields.employee'),
    render: filterRenders.relationToOne(),
  },
  basicSalaryRange: {
    label: i18n('entities.salary.fields.basicSalaryRange'),
    render: filterRenders.decimalRange(2),
  },
  allowanceSalaryRange: {
    label: i18n('entities.salary.fields.allowanceSalaryRange'),
    render: filterRenders.decimalRange(2),
  },
  totalSalaryRange: {
    label: i18n('entities.salary.fields.totalSalaryRange'),
    render: filterRenders.decimalRange(2),
  },
  advanceRange: {
    label: i18n('entities.salary.fields.advanceRange'),
    render: filterRenders.decimalRange(2),
  },
  netSalaryRange: {
    label: i18n('entities.salary.fields.netSalaryRange'),
    render: filterRenders.decimalRange(2),
  },
  paidSalaryRange: {
    label: i18n('entities.salary.fields.paidSalaryRange'),
    render: filterRenders.decimalRange(2),
  },
  balanceRange: {
    label: i18n('entities.salary.fields.balanceRange'),
    render: filterRenders.decimalRange(2),
  },
  account: {
      label: i18n('entities.salary.fields.account'),
      render: filterRenders.relationToOne(),
    },
  salaryDateRange: {
    label: i18n('entities.salary.fields.salaryDateRange'),
    render: filterRenders.dateRange(),
  },
  shop: {
      label: i18n('entities.salary.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const SalaryListFilter = (props) => {
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
                  <UserAutocompleteFormItem  
                    name="employee"
                    label={i18n('entities.salary.fields.employee')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <AccountsAutocompleteFormItem  
                    name="account"
                    label={i18n('entities.salary.fields.account')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="salaryDateRange"
                    label={i18n('entities.salary.fields.salaryDateRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.salary.fields.shop')}        
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

export default SalaryListFilter;