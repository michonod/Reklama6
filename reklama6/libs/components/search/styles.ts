import { Button as AntdButton, Input as AntdInput } from "antd";
import styled from "styled-components";

export const Button = styled(AntdButton)`
  font-size: 16px;
  border-radius: 0px;
  width: 400px !important;
  justify-content: start;
  align-items: center;
`;

export const CategoryButton = styled(Button)`
  border-radius: 20px 0 0 20px;
`;

export const SearchButton = styled(Button)`
  border-radius: 0 20px 20px 0;
  width: 100px !important;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blue.dark};
  color: ${(props) => props.theme.colors.white.primary};
`;

export const Input = styled(AntdInput)`
  border-radius: 0;
  width: 400px;
`;

export const SearchContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
