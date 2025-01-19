import React, { forwardRef } from "react";

import { Button } from 'src/components/ui/button/button';

import { StyledPopUp, StyledPopUpHeader } from "./styled";

const PopUp = forwardRef(({children}, popUpRef) => {
  return (
    <StyledPopUp ref={popUpRef}>
      <StyledPopUpHeader>
        Форма заказа.
        <Button onButtonClick={() => popUpRef.current.close()}>X</Button>
      </StyledPopUpHeader>
      {children}
    </StyledPopUp>
  )
});

PopUp.displayName = 'PopUp';

export { PopUp };
