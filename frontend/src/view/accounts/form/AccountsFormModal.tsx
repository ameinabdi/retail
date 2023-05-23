import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AccountsForm from 'src/view/accounts/form/AccountsForm';
import AccountsService from 'src/modules/accounts/accountsService';
import Errors from 'src/modules/shared/error/errors';

const AccountsFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AccountsService.create(data);
      const record = await AccountsService.find(id);
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
      title={i18n('entities.accounts.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AccountsForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AccountsFormModal;
