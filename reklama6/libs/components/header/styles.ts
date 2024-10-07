import {
  DropboxOutlined,
  PlusCircleOutlined,
  StarFilled,
} from "@ant-design/icons";
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
  border: 1px solid ${({ theme }) => theme.colors.gold.primary};
  background-color: ${({ theme }) => theme.colors.gold.primary};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  font-size: 20px;
  font-weight: 800;
`;

export const Plus = styled(PlusCircleOutlined)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.blue.secondary};
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
    :hover {
      color: black;
      transition: color 0.5s ease, transform 0.5 ease; /* Smooth transitions */
    }
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

export const Star = styled(StarFilled)`
  color: ${({ theme }) => theme.colors.gold.primary};
`;
