import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/advance/list/advanceListActions';
import selectors from 'src/modules/advance/list/advanceListSelectors';
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
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import AccountsAutocompleteFormItem from 'src/view/accounts/autocomplete/AccountsAutocompleteFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  employee: yupFilterSchemas.relationToOne(
    i18n('entities.advance.fields.employee'),
  ),
  amountRange: yupFilterSchemas.decimalRange(
    i18n('entities.advance.fields.amountRange'),
  ),
  note: yupFilterSchemas.string(
    i18n('entities.advance.fields.note'),
  ),
  advanceDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.advance.fields.advanceDateRange'),
  ),
  account: yupFilterSchemas.relationToOne(
    i18n('entities.advance.fields.account'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.advance.fields.shop'),
  ),
});

const emptyValues = {
  employee: null,
  amountRange: [],
  note: null,
  advanceDateRange: [],
  account: null,
  shop: null,
}

const previewRenders = {
  employee: {
    label: i18n('entities.advance.fields.employee'),
    render: filterRenders.relationToOne(),
  },
  amountRange: {
    label: i18n('entities.advance.fields.amountRange'),
    render: filterRenders.decimalRange(2),
  },
  note: {
    label: i18n('entities.advance.fields.note'),
    render: filterRenders.generic(),
  },
  advanceDateRange: {
    label: i18n('entities.advance.fields.advanceDateRange'),
    render: filterRenders.datetimeRange(),
  },
  account: {
      label: i18n('entities.advance.fields.account'),
      render: filterRenders.relationToOne(),
    },
  shop: {
      label: i18n('entities.advance.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const AdvanceListFilter = (props) => {
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
                    label={i18n('entities.advance.fields.employee')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputRangeFormItem
                    name="amountRange"
                    label={i18n('entities.advance.fields.amountRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="note"
                    label={i18n('entities.advance.fields.note')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="advanceDateRange"
                    label={i18n('entities.advance.fields.advanceDateRange')}    
                    showTime
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <AccountsAutocompleteFormItem  
                    name="account"
                    label={i18n('entities.advance.fields.account')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.advance.fields.shop')}        
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

export default AdvanceListFilter;