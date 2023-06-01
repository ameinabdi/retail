import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form,Col, Row,  } from 'antd';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';
import SellItemListTableitem from 'src/view/sellItem/list/SellItemListTableitem';

const SellView = (props) => {
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
      {Boolean(record.customer) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.sell.fields.customer')}
          >
            <CustomerViewItem value={record.customer} />
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.sellDate) && (
        <Form.Item
          {...viewItemLayout}
            labelAlign='left'
          label={i18n('entities.sell.fields.sellDate')}
        >
          {record.sellDate}
        </Form.Item>
      )}
      </Col>
      <Col {...columnsResponsiveProps}>
      {Boolean(record.sellDetails) && (
        <Form.Item
          {...viewItemLayout}
            labelAlign='left'
          label={i18n('entities.sell.fields.sellDetails')}
        >
          {record.sellDetails}
        </Form.Item>
      )}
      </Col>
      <Col {...columnsResponsiveProps}> 
      {(Boolean(record.totalAmount) || record.totalAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
              labelAlign='left'
            label={i18n('entities.sell.fields.totalAmount')}
          >
            {Number(record.totalAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}> 
      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
              labelAlign='left'
            label={i18n('entities.sell.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}> 
      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
              labelAlign='left'
            label={i18n('entities.sell.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}
      </Col>
      <Col {...columnsResponsiveProps}> 
      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
              labelAlign='left'
            label={i18n('entities.sell.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
          </Col>
        </Row>
        <SellItemListTableitem sell={record} />
    </ViewWrapper>
  );
};

export default SellView;
