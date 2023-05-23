import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SupplierForm from 'src/view/supplier/form/SupplierForm';
import SupplierService from 'src/modules/supplier/supplierService';
import Errors from 'src/modules/shared/error/errors';

const SupplierFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SupplierService.create(data);
      const record = await SupplierService.find(id);
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
      title={i18n('entities.supplier.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SupplierForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SupplierFormModal;
