import React from "react";

import { StyledButton } from './styled';

const Button = ({
  children,
  onButtonClick,
  buttonType = 'button',
  isDisabled
}) => {
  return (
    <StyledButton disabled={isDisabled} type={buttonType} onClick={onButtonClick}>{children}</StyledButton>
  )
};

export { Button };
