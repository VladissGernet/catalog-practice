import React from "react";

import {StyledTitle} from './styled';

export const TitleSizes = {
  BIG: 'big',
  SMALL: 'small',
  MEDIUM: 'medium',
  DEFAULT: '',
}

export const TitleLevels = {
  H1: 1,
  H2: 2,
  H3: 3,
  H4: 4,
  H5: 5,
  H6: 6,
}

export const Title = ({
  children,
  level = 1,
  size,
  className
}) => {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
};
