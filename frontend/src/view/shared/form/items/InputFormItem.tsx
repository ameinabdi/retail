import { Form, Input } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import FormErrors from 'src/view/shared/form/formErrors';

export const InputFormItem = (props) => {
  const {
    label,
    name,
    hint,
    layout,
    size,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    prefix,
    externalErrorMessage,
    required,
    addonAfter,
    hidden,
    value,
    disabled,
    min
  } = props;

  const {
    setValue,
    watch,
    register,
    //@ts-ignore
    errors,
    //@ts-ignore
    formState: { touched, isSubmitted },
  } = useFormContext();

  useEffect(() => {
    //@ts-ignore
    register({ name });
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <Form.Item
      {...layout}
      label={label}
      labelAlign="left"
      required={required}
      requiredMark={required}
      validateStatus={errorMessage ? 'error' : 'success'}
      help={errorMessage || hint}
    >
      <Input
        id={name}
        name={name}
        type={type}
        value={value || watch(name)}
        onChange={(event) => {
          setValue(name, event.target.value, { shouldValidate: true, shouldDirty: true });
          props.onChange &&
            props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        size={size || undefined}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || false}
        autoComplete={autoComplete || undefined}
        prefix={prefix || undefined}
        addonAfter={addonAfter || undefined}
        hidden={hidden || undefined}
        disabled={disabled || undefined}
        min={min || undefined}
      />
    </Form.Item>
  );
};

InputFormItem.defaultProps = {
  layout: null,
  type: 'text',
  required: false,
};

InputFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  layout: PropTypes.object,
  errorMessage: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  externalErrorMessage: PropTypes.string,
  addonAfter: PropTypes.any,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  value:PropTypes.any,
  min: PropTypes.any
};

export default InputFormItem;
