import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';

const ReceiptVoucherView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.customer) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.receiptVoucher.fields.customer')}
          >
            <CustomerViewItem value={record.customer} />
          </Form.Item>
        )}

      {(Boolean(record.unpaidAmount) || record.unpaidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.receiptVoucher.fields.unpaidAmount')}
          >
            {Number(record.unpaidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.receiptVoucher.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.receiptVoucher.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.receiptNote) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.receiptVoucher.fields.receiptNote')}
        >
          {record.receiptNote}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default ReceiptVoucherView;
