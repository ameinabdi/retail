import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const CustomerView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.fullName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.customer.fields.fullName')}
        >
          {record.fullName}
        </Form.Item>
      )}

      {Boolean(record.telephone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.customer.fields.telephone')}
        >
          {record.telephone}
        </Form.Item>
      )}

      {(Boolean(record.initialBalance) || record.initialBalance === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.customer.fields.initialBalance')}
          >
            {Number(record.initialBalance).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.customer.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default CustomerView;
