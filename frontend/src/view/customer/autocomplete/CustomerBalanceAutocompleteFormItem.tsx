import React, { useState } from 'react';
import CustomerService from 'src/modules/customer/customerService';
import CustomerFormModal from 'src/view/customer/form/CustomerFormModal';
import AutocompleteFormItem from 'src/view/shared/form/items/customAutocompleteFormItem';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/customer/customerSelectors';
import { useFormContext } from 'react-hook-form';

const CustomerBalanceAutocompleteFormItem = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setValue, getValues } = useFormContext();

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(name, [
        ...(getValues()[name] || []),
        record,
      ], {shouldValidate: true, shouldDirty: true});
    } else {
      setValue(name, record, {shouldValidate: true, shouldDirty: true});
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return CustomerService.BalancelistAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      const key = value.id;
      let label = value.label;
      let data = value.data;

      if (value.fullName) {
        label = value.fullName;
        data = value
      }

      return {
        key,
        label,
        data,
      };
    },

    toValue(value) {
      if (!value) {
        return null;
      }

      return {
        id: value.id,
        label: value.label,
        data:value.data
      };
    },
  };

  const { form, disabled, ...rest} = props;
  return (
    <>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchFn}
        mapper={mapper}
        disabled={disabled}
        onOpenModal={doOpenModal}
        inMemoryFilter
        hasPermissionToCreate={hasPermissionToCreate}
      />

      <CustomerFormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
      />
    </>
  );
};

export default CustomerBalanceAutocompleteFormItem;
