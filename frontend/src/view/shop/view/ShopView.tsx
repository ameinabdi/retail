import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const ShopView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.shopName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.shop.fields.shopName')}
        >
          {record.shopName}
        </Form.Item>
      )}

      {Boolean(record.shopTelephone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.shop.fields.shopTelephone')}
        >
          {record.shopTelephone}
        </Form.Item>
      )}

      {Boolean(record.shopCurrency) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.shop.fields.shopCurrency')}
        >
          {i18n(
            `entities.shop.enumerators.shopCurrency.${record.shopCurrency}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.shopAddress) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.shop.fields.shopAddress')}
        >
          {record.shopAddress}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default ShopView;
