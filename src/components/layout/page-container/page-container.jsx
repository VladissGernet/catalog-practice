import React from "react";
import { StyledPageContainer } from "./styled";
import { Outlet } from "react-router-dom";

import {Header} from "/src/components/layout/header/header";

export const PageContainer = () => {
  return (
    <>
      <Header />
      <StyledPageContainer>
        <Outlet />
      </StyledPageContainer>
    </>
  );
};
