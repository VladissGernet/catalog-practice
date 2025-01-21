import React from "react";

import { StyledInput } from "./styled";

const OrderInput = ({type='text', placeholder='', value, setValue}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export { OrderInput };
