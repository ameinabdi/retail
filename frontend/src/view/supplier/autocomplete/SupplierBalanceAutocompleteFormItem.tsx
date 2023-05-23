import React, { useState } from 'react';
import SupplierService from 'src/modules/supplier/supplierService';
import SupplierFormModal from 'src/view/supplier/form/SupplierFormModal';
import AutocompleteFormItem from 'src/view/shared/form/items/customAutocompleteFormItem';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/supplier/supplierSelectors';
import { useFormContext } from 'react-hook-form';

const SupplierBalanceAutocompleteFormItem = (props) => {
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
    return SupplierService.listBalanceAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      const key = value.id;
      let label = value.label;
      let data = value.data;
      
      if (value.supplierName) {
        label = value.supplierName;
        data = value
      }

      return {
        key,
        label,
        data
      };
    },

    toValue(value) {
      if (!value) {
        return null;
      }

      return {
        id: value.id,
        label: value.label,
        data: value.data
      };
    },
  };

  const { form, ...rest } = props;
  return (
    <>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        inMemoryFilter
        hasPermissionToCreate={hasPermissionToCreate}
      />

      <SupplierFormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
      />
    </>
  );
};

export default SupplierBalanceAutocompleteFormItem;
