import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import UserViewItem from 'src/view/user/view/UserViewItem';
import moment from 'moment';
import AccountsViewItem from 'src/view/accounts/view/AccountsViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const AdvanceView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.employee) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.advance.fields.employee')}
          >
            <UserViewItem value={record.employee} />
          </Form.Item>
        )}

      {(Boolean(record.amount) || record.amount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.advance.fields.amount')}
          >
            {Number(record.amount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.note) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.advance.fields.note')}
        >
          {record.note}
        </Form.Item>
      )}

      {Boolean(record.advanceDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n(
            'entities.advance.fields.advanceDate',
          )}
        >
          <>
            {moment(record.advanceDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}

      {Boolean(record.account) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.advance.fields.account')}
          >
            <AccountsViewItem value={record.account} />
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.advance.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default AdvanceView;
