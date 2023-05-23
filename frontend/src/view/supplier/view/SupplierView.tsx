import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import ShopViewItem from 'src/view/shop/view/ShopViewItem';

const SupplierView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.supplierName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.supplier.fields.supplierName')}
        >
          {record.supplierName}
        </Form.Item>
      )}

      {Boolean(record.supplierType) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.supplier.fields.supplierType')}
        >
          {i18n(
            `entities.supplier.enumerators.supplierType.${record.supplierType}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.supplierTelephone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.supplier.fields.supplierTelephone')}
        >
          {record.supplierTelephone}
        </Form.Item>
      )}

      {Boolean(record.supplierAddress) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.supplier.fields.supplierAddress')}
        >
          {record.supplierAddress}
        </Form.Item>
      )}

      {(Boolean(record.initialBalance) ||
        record.initialBalance === 0) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.supplier.fields.initialBalance')}
          >
            {record.initialBalance}
          </Form.Item>
        )}

      {Boolean(record.shop) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.supplier.fields.shop')}
          >
            <ShopViewItem value={record.shop} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default SupplierView;
