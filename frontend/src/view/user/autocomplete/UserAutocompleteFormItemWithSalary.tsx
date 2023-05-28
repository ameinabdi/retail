import React, { useState } from 'react';
import UserService from 'src/modules/user/userService';
import AutocompleteFormItem from 'src/view/shared/form/items/customAutocompleteFormItem';
import UserNewFormModal from 'src/view/user/new/UserNewFormModal';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/user/userSelectors';
import { useFormContext } from 'react-hook-form';

const UserAutocompleteFormItemWithSalary = (props) => {
  const { setValue, getValues } = useFormContext();

  const [modalVisible, setModalVisible] = useState(false);

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
    return UserService.fetchUserAutocompleteWithSalary(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      if (value.fullName || value.email) {
        let label = value.email;

        if (value.fullName) {
          label = `${value.fullName} <${value.email}>`;
        }

        return {
          key: value.id,
          label,
          data:value.data
        };
      }

      return {
        key: value.id,
        label: value.label,
        data:value.data
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

  return (
    <>
      <AutocompleteFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        inMemoryFilter
        hasPermissionToCreate={hasPermissionToCreate}
      />

      <UserNewFormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
      />
    </>
  );
};

export default UserAutocompleteFormItemWithSalary;
