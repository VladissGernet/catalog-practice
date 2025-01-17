import React from "react";

import { CounterWrapper, CounterText, CounterValue } from "./styled";

const Counter = ({quantity, onChange}) => {
  return (
    <CounterWrapper>
      <CounterText>Количество:</CounterText>
      <button
        type="button"
        onClick={() => onChange && onChange(quantity === 1 ? quantity : quantity - 1)}
      >
        -
      </button>
      <CounterValue>
        {quantity}
      </CounterValue>
      <button
        type="button"
        onClick={() => onChange && onChange(quantity + 1)}
      >
        +
      </button>
    </CounterWrapper>
  );
};

export { Counter };
