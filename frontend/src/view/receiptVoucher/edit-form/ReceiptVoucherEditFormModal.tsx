import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import ReceiptVoucherForm from 'src/view/receiptVoucher/form/ReceiptVoucherForm';
import ReceiptVoucherService from 'src/modules/receiptVoucher/receiptVoucherService';
import Errors from 'src/modules/shared/error/errors';

const ReceiptVoucherFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await ReceiptVoucherService.create(data);
      const record = await ReceiptVoucherService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.receiptVoucher.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <ReceiptVoucherForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default ReceiptVoucherFormModal;
