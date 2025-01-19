import React, {useContext, useState, useRef} from "react";
import { useParams } from "react-router-dom";

import {ProductContext} from 'src/components/app/app';

import { ProductSlider } from "src/components/blocks/slider/slider";
import {Counter} from 'src/components/blocks/counter/counter';
import { Page404 } from "src/components/pages/page-404/page-404";

import { Code } from 'src/components/ui/code/code';
import { Price } from 'src/components/ui/price/price';
import { Title, TitleSizes } from 'src/components/ui/title/title';
import { Delivery } from 'src/components/ui/delivery/delivery';
import { Button } from 'src/components/ui/button/button';
import { PopUp } from 'src/components/blocks/pop-up/pop-up';

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

  return product ? (
    <StyledSection>
      <Title size={TitleSizes.BIG}>{product.title}</Title>
      <Code>{product.code}</Code>
      <ProductSlider mockDataObject={product} />
      <Counter quantity={quantity} onChange={setQuantity} />
      <Price>{price} ₽</Price>
      <Delivery>{product.delivery}</Delivery>
      <Button onButtonClick={onButtonClick}>Купить</Button>
      <PopUp ref={popUpRef}/>
    </StyledSection>
  ) : (
    <Page404 />
  );
};

export {Product};
