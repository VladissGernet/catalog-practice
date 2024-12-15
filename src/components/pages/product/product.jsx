import React from "react";

import { useParams } from "react-router-dom";

import { ProductSlider } from "src/components/blocks/slider/slider";
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';
import {Counter} from 'src/components/blocks/counter/counter';
import {Price} from 'src/components/blocks/price/price';

const Product = ({data}) => {
  const params = useParams(); // Получаем уникальный код продукта на который кликнули, чтобы отрендерить.
  const product = data.find((product) => product.code.toString() === params.code);

  return (
    <>
      <StyledTitle size={TitleSizes.BIG}>{product.title}</StyledTitle>
      <Code>{product.code}</Code>
      <ProductSlider mockDataObject={product} />
      <Counter />
      <Price />
    </>
  );
};

export {Product};
