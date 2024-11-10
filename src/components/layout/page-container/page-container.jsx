import React from "react";
import { StyledPageContainer } from "./styled";

export const PageContainer = ({children}) => {
  return (
    <StyledPageContainer>
      {children}
    </StyledPageContainer>
  );
};
