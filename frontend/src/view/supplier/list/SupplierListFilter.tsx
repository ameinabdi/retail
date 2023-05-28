import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/supplier/list/supplierListActions';
import selectors from 'src/modules/supplier/list/supplierListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import supplierEnumerators from 'src/modules/supplier/supplierEnumerators';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  supplierName: yupFilterSchemas.string(
    i18n('entities.supplier.fields.supplierName'),
  ),
  supplierType: yupFilterSchemas.enumerator(
    i18n('entities.supplier.fields.supplierType'),
  ),
  supplierTelephone: yupFilterSchemas.string(
    i18n('entities.supplier.fields.supplierTelephone'),
  ),
  supplierAddress: yupFilterSchemas.string(
    i18n('entities.supplier.fields.supplierAddress'),
  ),
  initialBalanceRange: yupFilterSchemas.decimalRange(
    i18n('entities.supplier.fields.initialBalanceRange'),
  ),
  shop: yupFilterSchemas.relationToOne(
    i18n('entities.supplier.fields.shop'),
  ),
});

const emptyValues = {
  supplierName: null,
  supplierType: null,
  supplierTelephone: null,
  supplierAddress: null,
  initialBalanceRange: [],
  shop: null,
}

const previewRenders = {
  supplierName: {
    label: i18n('entities.supplier.fields.supplierName'),
    render: filterRenders.generic(),
  },
  supplierType: {
    label: i18n('entities.supplier.fields.supplierType'),
    render: filterRenders.enumerator('entities.supplier.enumerators.supplierType',),
  },
  supplierTelephone: {
    label: i18n('entities.supplier.fields.supplierTelephone'),
    render: filterRenders.generic(),
  },
  supplierAddress: {
    label: i18n('entities.supplier.fields.supplierAddress'),
    render: filterRenders.generic(),
  },
  initialBalanceRange: {
    label: i18n('entities.supplier.fields.initialBalanceRange'),
    render: filterRenders.decimalRange(),
  },
  shop: {
      label: i18n('entities.supplier.fields.shop'),
      render: filterRenders.relationToOne(),
    },
}

const SupplierListFilter = (props) => {
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
                    name="supplierName"
                    label={i18n('entities.supplier.fields.supplierName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="supplierType"
                    label={i18n('entities.supplier.fields.supplierType')}
                    options={supplierEnumerators.supplierType.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.supplier.enumerators.supplierType.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="supplierTelephone"
                    label={i18n('entities.supplier.fields.supplierTelephone')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <ShopAutocompleteFormItem  
                    name="shop"
                    label={i18n('entities.supplier.fields.shop')}        
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

export default SupplierListFilter;