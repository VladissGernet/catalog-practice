import React from "react";

import {StyledPrice} from './styled';

const Price = ({children}) => {
  return (
    <StyledPrice>Цена: {children}</StyledPrice>
  )
};

export {Price};
