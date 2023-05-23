import { Form } from 'antd';
import { useFormContext } from 'react-hook-form';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const ViewFormItem = (props) => {
  const { watch, register } = useFormContext();
  const { label, name, layout } = props;

  useEffect(() => {
    //@ts-ignore
    register({ name });
  }, [register, name]);

  return (
    <Form.Item {...layout} label={label} labelAlign="left">
      <strong>{watch(name)}</strong>
    </Form.Item>
  );
};

ViewFormItem.defaultProps = {
  layout: null,
};

ViewFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  layout: PropTypes.object,
};

export default ViewFormItem;
