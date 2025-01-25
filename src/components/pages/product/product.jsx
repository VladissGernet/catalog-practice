import React, {useContext, useState, useRef} from "react";
import { useParams } from "react-router-dom";

import {ProductContext} from 'src/components/app/app';

import { ProductSlider } from "src/components/blocks/slider/slider";
import { Counter } from 'src/components/blocks/counter/counter';
import { Page404 } from "src/components/pages/page-404/page-404";

import { Code } from 'src/components/ui/code/code';
import { Price } from 'src/components/ui/price/price';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Delivery } from 'src/components/ui/delivery/delivery';
import { Button } from 'src/components/ui/button/button';
import { PopUp } from 'src/components/blocks/pop-up/pop-up';
import { Order } from 'src/components/blocks/order/order';
import { Tabs } from 'src/components/blocks/tabs/tabs';

import {StyledSection} from './styled';

const INITIAL_QUANTITY = 1;

const Product = () => {
  const {code} = useParams(); // Получаем код продукта на который кликнули.
  const data = useContext(ProductContext);
  const product = data.find((product) => product.code === code);

  const [quantity, setQuantity] = useState(INITIAL_QUANTITY); // Количество продукта.
  const price = product.price * quantity;

  const popUpRef = useRef(null);

  const onButtonClick = () => {
    popUpRef.current.showModal();
  };

  // Остановился на создании контента табов и кнопок для переключения.

  const tabs = [
    {
      title: 'Описание',
      content: (
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Nam senectus metus pulvinar diam venenatis velit dolor varius. Ultrices montes malesuada rutrum ut accumsan taciti gravida. Porttitor class bibendum purus dui dis amet. Conubia sollicitudin pharetra vivamus himenaeos volutpat volutpat. Pretium cursus nulla interdum felis ad montes imperdiet accumsan. Torquent euismod nec ac eleifend condimentum. Netus ridiculus arcu sociosqu odio orci.
        </p>
      )
    },
    {
      title: 'Комментарии',
      content: (
        <p>
          Другой контент
        </p>
      )
    }
  ]

  return product ? (
    <StyledSection>
      <Title size={TitleSizes.BIG}>{product.title}</Title>
      <Code>{product.code}</Code>
      <ProductSlider mockDataObject={product} />
      <Counter quantity={quantity} onChange={setQuantity} />
      <Price>{price} ₽</Price>
      <Delivery>{product.delivery}</Delivery>
      <Button onButtonClick={onButtonClick}>Купить</Button>
      <Tabs tabs={tabs} />
      <PopUp ref={popUpRef}>
        <Order />
      </PopUp>
    </StyledSection>
  ) : (
    <Page404 />
  );
};

export {Product};
