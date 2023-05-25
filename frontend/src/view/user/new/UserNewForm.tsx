import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import TagsFormItem from 'src/view/shared/form/items/TagsFormItem';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import ShopAutocompleteFormItem from 'src/view/shop/autocomplete/ShopAutocompleteFormItem';

const singleSchema = yup.object().shape({
  email: yupFormSchemas.email(i18n('user.fields.email')),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
    { required: true, min: 1 },
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

const multipleSchema = yup.object().shape({
  emails: yup
    .array()
    .label(i18n('user.fields.emails'))
    .of(
      yup
        .string()
        .transform((cv, ov) => {
          return ov === '' ? null : cv;
        })
        .email(i18n('user.validations.email'))
        .label(i18n('user.fields.email'))
        .max(255)
        .required(),
    )
    .required().min(1),
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
    { required: true, min: 1 },
  ),
});

const UserNewForm = (props) => {
  const schema = props.single
    ? singleSchema
    : multipleSchema;

  const [initialValues] = useState(() => ({
    emails: [],
    email: '',
    roles: [],
    fullName:'',
    phoneNumber:'',
    password:'',
    basicSalary: '',
    allowanceSalary: '',
    shop:'',

  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;

    if (data.email) {
      data.emails = [data.email];
      delete data.email;
    }

    props.onSubmit(null, data);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { single, saveLoading } = props;

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
          {single ? (
            <InputFormItem
              name="email"
              label={i18n('user.fields.email')}
              required={true}
              layout={formItemLayout}
              autoFocus
            />
          ) : (
            <TagsFormItem
              name="emails"
              label={i18n('user.fields.emails')}
              notFoundContent={i18n('user.new.emailsHint')}
              required={true}
              layout={formItemLayout}
              autoFocus
            />
          )}
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
            required={true}
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

export default UserNewForm;
