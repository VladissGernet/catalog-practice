import React from 'react';

import { StyledDescription } from './styled';

import { Button } from 'src/components/ui/button/button';

const Description = ({productDescription, onShowMore, isShowAllDescription = false}) => (
    <>
      <StyledDescription>
        {productDescription}
      </StyledDescription>
      <Button onButtonClick={onShowMore}>
        {isShowAllDescription ? 'Скрыть' : 'Подробнее'}
      </Button>
    </>
  );

export { Description };
