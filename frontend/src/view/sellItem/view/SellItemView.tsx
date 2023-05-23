import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const SellItemView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.itemName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.sellItem.fields.itemName')}
        >
          {record.itemName}
        </Form.Item>
      )}

      {Boolean(record.product) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sellItem.fields.product')}
          >
            <ProductViewItem value={record.product} />
          </Form.Item>
        )}

      {(Boolean(record.price) || record.price === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sellItem.fields.price')}
          >
            {Number(record.price).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.quantity) || record.quantity === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sellItem.fields.quantity')}
          >
            {Number(record.quantity).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.total) || record.total === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sellItem.fields.total')}
          >
            {Number(record.total).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.sellItem.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default SellItemView;
