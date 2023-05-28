import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form,Col, Row, Card, } from 'antd';
import moment from 'moment';
import SupplierViewItem from 'src/view/supplier/view/SupplierViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';
import PurchaseItemListTable from 'src/view/purchaseItem/list/PurchaseItemListTableItem';

const PurchaseView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }
  const columnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 6,
    lg: 6,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };
  return (
    <ViewWrapper>
      <Row gutter={16}>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.supplier) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign="left"
            label={i18n('entities.purchase.fields.supplier')}
          >
            <SupplierViewItem value={record.supplier} />
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {(Boolean(record.totalAmount) || record.totalAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign="left"
            label={i18n('entities.purchase.fields.totalAmount')}
          >
            {Number(record.totalAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign="left"
            label={i18n('entities.purchase.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign="left"
            label={i18n('entities.purchase.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.purchaseDate) && (
        <Form.Item
          {...viewItemLayout}
          labelAlign="left"
          label={i18n(
            'entities.purchase.fields.purchaseDate',
          )}
        >
          <>
            {moment(record.purchaseDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.purchaseDatails) && (
        <Form.Item
          {...viewItemLayout}
          labelAlign="left"
          label={i18n('entities.purchase.fields.purchaseDatails')}
        >
          {record.purchaseDatails}
        </Form.Item>
      )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign="left"
            label={i18n('entities.purchase.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
      </Col>
      </Row>
      <Card>
        <PurchaseItemListTable purchase={record} />
      </Card>
    </ViewWrapper>
  );
};

export default PurchaseView;
