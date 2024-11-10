import React from "react";

import {StyledCode} from './styled';

export const Code = ({children}) => {
  return (
    <StyledCode>Артикул: {children}</StyledCode>
  )
};
