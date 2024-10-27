import { Spin } from "antd";
import React from "react";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (
    <LoadingContainer>
      <Spin size="large" />
    </LoadingContainer>
  );
};
