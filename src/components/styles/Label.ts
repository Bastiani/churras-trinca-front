import styled from 'styled-components';
import { Form } from 'antd';

const { Item } = Form;

export const LabelStyled = styled(Item)`
  && {
    .ant-form-item-label {
      padding: 0px;
    }
    .ant-form-item-control-wrapper {
      padding: 0px;
    }
  }
`;

export const ContentStyled = styled.div`
  ${props =>
    // @ts-ignore
    props.isRequired &&
    `label::before {
    display: inline-block;
    margin-right: 4px;
    color: #f5222d;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: '*';
  }`}
`;
