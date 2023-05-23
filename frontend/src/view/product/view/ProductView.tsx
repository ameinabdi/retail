import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import moment from 'moment';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const ProductView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.productName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.product.fields.productName')}
        >
          {record.productName}
        </Form.Item>
      )}

      {Boolean(record.productSerialNumber) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.product.fields.productSerialNumber')}
        >
          {record.productSerialNumber}
        </Form.Item>
      )}

      {Boolean(record.productQuantity) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.product.fields.productQuantity')}
        >
          {record.productQuantity}
        </Form.Item>
      )}

      {(Boolean(record.productPrice) || record.productPrice === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.product.fields.productPrice')}
          >
            {Number(record.productPrice).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.purchaseDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n(
            'entities.product.fields.purchaseDate',
          )}
        >
          <>
            {moment(record.purchaseDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}

      {Boolean(record.productPhoto) && Boolean(record.productPhoto.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.product.fields.productPhoto')}
          >
            <ImagesViewer value={record.productPhoto} />
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.product.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default ProductView;
