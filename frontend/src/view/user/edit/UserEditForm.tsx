import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import actions from 'src/modules/user/form/userFormActions';
import selectors from 'src/modules/user/form/userFormSelectors';
import userEnumerators from 'src/modules/user/userEnumerators';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper, {
  tailFormItemLayout,
  formItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const schema = yup.object().shape({
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
  ),
  fullName: yupFormSchemas.string(
    i18n('user.fields.fullName'),
    {
      "required": true
    },
  ),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {},
  ),
  shop: yupFormSchemas.relationToOne(
    i18n('user.fields.shop'),
    {},
  ),
  basicSalary: yupFormSchemas.decimal(
    i18n('user.fields.basicSalary'),
    {
      "scale": 2
    },
  ),
  allowanceSalary: yupFormSchemas.decimal(
    i18n('user.fields.allowanceSalary'),
    {
      "scale": 2
    },
  ),
});

const UserEditForm = (props) => {
  const dispatch = useDispatch();

  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );

  const [initialValues] = useState(() => props.user || {});

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      id: props.user.id,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data));
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputFormItem
            name="fullName"
            label={i18n('user.fields.fullName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
            <InputFormItem
            name="email"
            label={i18n('user.fields.email')}
            required={false}
            layout={formItemLayout}
            value={props.user.email}
            disabled
          />
          <InputFormItem
            name="password"
            label={i18n('user.fields.password')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <InputFormItem
            name="phoneNumber"
            label={i18n('user.fields.phoneNumber')}  
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="roles"
            label={i18n('user.fields.roles')}
            options={userEnumerators.roles.map((value) => ({
              value,
              label: i18n(`roles.${value}.label`),
            }))}
            mode="multiple"
            layout={formItemLayout}
          />
          <InputFormItem
            name="basicSalary"
            label={i18n('user.fields.basicSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="allowanceSalary"
            label={i18n('user.fields.allowanceSalary')}  
            required={false}
            layout={formItemLayout}
          />
          <ShopAutocompleteFormItem
            name="shop"
            label={i18n('user.fields.shop')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default UserEditForm;
