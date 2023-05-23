import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SupplierViewItem from 'src/view/supplier/view/SupplierViewItem';

const PaymentVoucherView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.supplier) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.paymentVoucher.fields.supplier')}
          >
            <SupplierViewItem value={record.supplier} />
          </Form.Item>
        )}

      {(Boolean(record.unPaidAmount) || record.unPaidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.paymentVoucher.fields.unPaidAmount')}
          >
            {Number(record.unPaidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.paymentVoucher.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.paymentVoucher.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.paymentNote) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.paymentVoucher.fields.paymentNote')}
        >
          {record.paymentNote}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default PaymentVoucherView;
