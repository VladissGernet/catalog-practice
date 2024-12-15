import React from "react";
import { StyledPageContainer } from "./styled";
import { Outlet } from "react-router-dom";

export const PageContainer = () => {
  return (
    <StyledPageContainer>
      <Outlet />
    </StyledPageContainer>
  );
};
