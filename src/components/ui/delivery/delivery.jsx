import React from "react";

import { StyledDelivery, StyledValue } from './styled';

const Delivery = ({children}) => {
  return (
    <StyledDelivery>Доставка: <StyledValue>{children}</StyledValue></StyledDelivery>
  )
};

export {Delivery};
