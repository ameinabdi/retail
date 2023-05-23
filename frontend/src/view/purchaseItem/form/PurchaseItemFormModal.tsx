import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import PurchaseItemForm from 'src/view/purchaseItem/form/PurchaseItemForm';
import PurchaseItemService from 'src/modules/purchaseItem/purchaseItemService';
import Errors from 'src/modules/shared/error/errors';

const PurchaseItemFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await PurchaseItemService.create(data);
      const record = await PurchaseItemService.find(id);
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
      title={i18n('entities.purchaseItem.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <PurchaseItemForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default PurchaseItemFormModal;
