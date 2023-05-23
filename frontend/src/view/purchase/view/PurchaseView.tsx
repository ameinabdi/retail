import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import moment from 'moment';
import SupplierViewItem from 'src/view/supplier/view/SupplierViewItem';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const PurchaseView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.supplier) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchase.fields.supplier')}
          >
            <SupplierViewItem value={record.supplier} />
          </Form.Item>
        )}

      {(Boolean(record.totalAmount) || record.totalAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchase.fields.totalAmount')}
          >
            {Number(record.totalAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.paidAmount) || record.paidAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchase.fields.paidAmount')}
          >
            {Number(record.paidAmount).toFixed(2)}
          </Form.Item>
        )}

      {(Boolean(record.balanceAmount) || record.balanceAmount === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchase.fields.balanceAmount')}
          >
            {Number(record.balanceAmount).toFixed(2)}
          </Form.Item>
        )}

      {Boolean(record.purchaseDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n(
            'entities.purchase.fields.purchaseDate',
          )}
        >
          <>
            {moment(record.purchaseDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}

      {Boolean(record.purchaseDatails) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.purchase.fields.purchaseDatails')}
        >
          {record.purchaseDatails}
        </Form.Item>
      )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.purchase.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default PurchaseView;
