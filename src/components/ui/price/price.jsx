import React from "react";

import {StyledPrice} from './styled';

const Price = ({children}) => {
  return (
    <StyledPrice>{children}</StyledPrice>
  )
};

export {Price};
