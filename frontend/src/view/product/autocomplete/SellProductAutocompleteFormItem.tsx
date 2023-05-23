import React, { useState } from 'react';
import ProductService from 'src/modules/product/productService';
import ProductFormModal from 'src/view/product/form/ProductFormModal';
import AutocompleteFormItem from 'src/view/shared/form/items/customAutocompleteFormItem';
import { useSelector } from 'react-redux';
import selectors from 'src/modules/product/productSelectors';
import { useFormContext } from 'react-hook-form';

const SellProductAutocompleteFormItem = (props) => {
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
    return ProductService.listSellAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(value) {
      if (!value) {
        return null;
      }

      const key = value.id;
      let label = value.label;
      let data = value.data;

      if (value.productName) {
        label = value.productName;
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
        data:value.data,

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

      <ProductFormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
      />
    </>
  );
};

export default SellProductAutocompleteFormItem;
