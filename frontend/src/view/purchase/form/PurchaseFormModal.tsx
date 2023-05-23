import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import PurchaseForm from 'src/view/purchase/form/PurchaseForm';
import PurchaseService from 'src/modules/purchase/purchaseService';
import Errors from 'src/modules/shared/error/errors';

const PurchaseFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await PurchaseService.create(data);
      const record = await PurchaseService.find(id);
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
      title={i18n('entities.purchase.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <PurchaseForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default PurchaseFormModal;
