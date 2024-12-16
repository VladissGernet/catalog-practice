import React, {useContext} from "react";
import { useParams } from "react-router-dom";

import {ProductContext} from 'src/components/app/app';

import { ProductSlider } from "src/components/blocks/slider/slider";
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';
import {Counter} from 'src/components/blocks/counter/counter';
import {Price} from 'src/components/blocks/price/price';
import { Page404 } from "src/components/pages/page-404/page-404";

const Product = () => {
  const {code} = useParams(); // Получаем код продукта на который кликнули.
  const data = useContext(ProductContext);
  const product = data.find((product) => product.code === code);

  return product ? (
    <>
      <StyledTitle size={TitleSizes.BIG}>{product.title}</StyledTitle>
      <Code>{product.code}</Code>
      <ProductSlider mockDataObject={product} />
      <Counter />
      <Price />
    </>
  ) : (
    <Page404 />
  );
};

export {Product};
