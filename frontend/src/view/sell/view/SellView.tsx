import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const SellView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.customer) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sell.fields.customer')}
          >
            <CustomerViewItem value={record.customer} />
          </Form.Item>
        )}

      {Boolean(record.sellDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.sell.fields.sellDate')}
        >
          {record.sellDate}
        </Form.Item>
      )}

      {Boolean(record.sellDetails) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.sell.fields.sellDetails')}
        >
          {record.sellDetails}
        </Form.Item>
      )}

      {(Boolean(record.totalAmount) || record.totalAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sell.fields.totalAmount')}
          >
            {Number(record.totalAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sell.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sell.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sell.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default SellView;
