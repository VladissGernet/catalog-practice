import React, { forwardRef } from "react";

import { Button } from 'src/components/ui/button/button';

import { StyledPopUp, StyledPopUpHeader } from "./styled";

// Проблема. Не могу прокинуть onclick на кнопку закрытия.

const PopUp = forwardRef(({children}, popUpRef) => {
  return (
    <StyledPopUp ref={popUpRef}>
      <StyledPopUpHeader>
        <Button>X</Button>
      </StyledPopUpHeader>
      {children}
    </StyledPopUp>
  )
});

PopUp.displayName = 'PopUp';

export { PopUp };
