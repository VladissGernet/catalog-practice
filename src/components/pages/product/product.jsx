import React from "react";

import { ProductSlider } from "src/components/blocks/slider/slider";
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';
import {Counter} from 'src/components/blocks/counter/counter';
import {Price} from 'src/components/blocks/price/price';

const Product = ({product}) => {
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
