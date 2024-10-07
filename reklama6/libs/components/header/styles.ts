import { DropboxOutlined, PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Div = styled.div``;

export const Text = styled.p`
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const First = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  border: 1px solid black;
  background-color: #333333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const Plus = styled(PlusCircleOutlined)`
  font-size: 30px;
  color: burlywood;
  margin-right: 10px;
`;

export const Logo = styled(DropboxOutlined)`
  font-size: 55px;
  margin-right: 10px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
  width: 400px;
`;

export const RightContainer = styled.div`
  margin-right: 30px;
  button {
    margin-left: 5px;
  }
`;

export const SiteName = styled.h1`
  margin-right: 40px;
  font-weight: 400;
  font-size: 45px;
`;

export const LinkContainer = styled.div`
  :first-child {
    margin-right: 15px;
  }
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

export const RedText = styled.p`
  color: red;
`;

export const FlexText = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
