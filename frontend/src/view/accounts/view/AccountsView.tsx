import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const AccountsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.account) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.accounts.fields.account')}
        >
          {record.account}
        </Form.Item>
      )}

      {Boolean(record.type) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.accounts.fields.type')}
        >
          {i18n(
            `entities.accounts.enumerators.type.${record.type}`,
          )}
        </Form.Item>
      )}

      {(Boolean(record.openBalance) || record.openBalance === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.accounts.fields.openBalance')}
          >
            {Number(record.openBalance).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.accounts.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default AccountsView;
