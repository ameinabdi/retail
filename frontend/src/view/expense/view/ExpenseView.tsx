import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SupplierViewItem from 'src/view/supplier/view/SupplierViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const ExpenseView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.supplier) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.expense.fields.supplier')}
          >
            <SupplierViewItem value={record.supplier} />
          </Form.Item>
        )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.expense.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}

      {(Boolean(record.amount) || record.amount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.expense.fields.amount')}
          >
            {Number(record.amount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.expenseDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.expense.fields.expenseDate')}
        >
          {record.expenseDate}
        </Form.Item>
      )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.expense.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default ExpenseView;
