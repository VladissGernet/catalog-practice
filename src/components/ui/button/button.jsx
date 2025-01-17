import React from "react";

import { StyledButton } from './styled';

const Button = ({
  children,
  onButtonClick,
  buttonType = 'button',
}) => {
  return (
    <StyledButton type={buttonType} onClick={onButtonClick}>{children}</StyledButton>
  )
};

export { Button };
