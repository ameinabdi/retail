import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import PaymentVoucherForm from 'src/view/paymentVoucher/form/PaymentVoucherForm';
import PaymentVoucherService from 'src/modules/paymentVoucher/paymentVoucherService';
import Errors from 'src/modules/shared/error/errors';

const PaymentVoucherFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await PaymentVoucherService.create(data);
      const record = await PaymentVoucherService.find(id);
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
      title={i18n('entities.paymentVoucher.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <PaymentVoucherForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default PaymentVoucherFormModal;
