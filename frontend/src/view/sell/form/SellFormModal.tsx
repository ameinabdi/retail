import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SellForm from 'src/view/sell/form/SellForm';
import SellService from 'src/modules/sell/sellService';
import Errors from 'src/modules/shared/error/errors';

const SellFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SellService.create(data);
      const record = await SellService.find(id);
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
      title={i18n('entities.sell.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SellForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SellFormModal;
