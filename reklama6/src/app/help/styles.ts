import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  margin-top: 50px;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  margin-left: 20px;
  font-weight: 600;
  width: 50%;
`;

export const HelpHeader = styled.h1`
  font-size: 20px;
  grid-column: 1/4;
`;

export const Container = styled.div``;
