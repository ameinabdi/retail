import styled from 'styled-components';

const Content = styled.div`
  width: 500px;
  height: 700px;
  min-height: 700px;
  overflow-y: auto;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 56px 40px;
  position: relative;
  background-color: white;
  color: black;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: black;
  }

  .ant-checkbox-wrapper {
    color: black;
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export default Content;
