import React, { useState } from "react";

import { CounterWrapper, CounterText, CounterValue } from "./styled";

const reduceQuantity = (quantity) => quantity > 1 ? quantity - 1 : 1;

const Counter = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <CounterWrapper>
      <CounterText>Количество:</CounterText>
      <button type="button" onClick={() => setQuantity(reduceQuantity(quantity))}>-</button>
      <CounterValue>{quantity}</CounterValue>
      <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
    </CounterWrapper>
  );
};

export { Counter };
