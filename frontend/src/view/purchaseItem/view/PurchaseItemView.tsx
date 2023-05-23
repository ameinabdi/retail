import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const PurchaseItemView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.product) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchaseItem.fields.product')}
          >
            <ProductViewItem value={record.product} />
          </Form.Item>
        )}

      {Boolean(record.itemName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.purchaseItem.fields.itemName')}
        >
          {record.itemName}
        </Form.Item>
      )}

      {(Boolean(record.costPrice) || record.costPrice === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchaseItem.fields.costPrice')}
          >
            {Number(record.costPrice).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.quantity) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.purchaseItem.fields.quantity')}
        >
          {record.quantity}
        </Form.Item>
      )}

      {(Boolean(record.sellingPrice) || record.sellingPrice === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchaseItem.fields.sellingPrice')}
          >
            {Number(record.sellingPrice).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.totalPrice) ||
        record.totalPrice === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchaseItem.fields.totalPrice')}
          >
            {record.totalPrice}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchaseItem.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default PurchaseItemView;
