import React, { useState } from "react";

import { Button } from "src/components/ui/button/button";
import { OrderInput } from 'src/components/ui/order-input/order-input';

import { StyledOrder } from "./styled";
// Остановился на добавлении формы заказа.

const Order = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const isOrderFilled = name && surname && phone && mail ? true : false;

  return (
    <StyledOrder>
      <OrderInput
        type="text"
        placeholder="Имя"
        value={name}
        setValue={setName}
      />
      <OrderInput
        type="text"
        placeholder="Фамилия"
        value={surname}
        setValue={setSurname}
      />
      <OrderInput
        type="phone"
        placeholder="Телефон"
        value={phone}
        setValue={setPhone}
      />
      <OrderInput
        type="email"
        placeholder="E-mail"
        value={mail}
        setValue={setMail}
      />
      <Button isDisabled={isOrderFilled === false} onButtonClick={() => alert('Заказ отправлен')}>Отправить</Button>
    </StyledOrder>
  )
};

export { Order };
