import styled from 'styled-components';

const ViewWrapper = styled.div`
  padding: 24px;
  padding-top: 0;
  padding-bottom: 0;

  .ant-form-item-label {
    white-space: normal;
  }

  .ant-row {
    margin-bottom: 8px;
  }
`;

export const viewItemLayout = {
  labelCol: {
    md: { span: 24 },
    lg: { span: 24 },
  },
  wrapperCol: {
    md: { span: 24 },
    lg: { span: 24 },
  },
};

export default ViewWrapper;
