import React, { forwardRef } from "react";

import { StyledPopUp } from "./styled";

const PopUp = forwardRef(({children}, popUpRef) => {
  return (
    <StyledPopUp ref={popUpRef}>
      {children}
    </StyledPopUp>
  )
});

PopUp.displayName = 'PopUp';

export { PopUp };
