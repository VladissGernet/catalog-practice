import React from "react";

import {mockData} from 'src/mocks/mock-products';

import { ProductSlider } from "src/components/blocks/slider/slider";
import {PageContainer} from 'src/components/layout/page-container/page-container';
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';



const ProductPage = () => {
  return (
    <PageContainer>
      <StyledTitle size={TitleSizes.BIG}>{mockData[0].title}</StyledTitle>
      <Code>{mockData[0].code}</Code>
      <ProductSlider mockDataObject={mockData[0]} />
    </PageContainer>
  );
};

export default ProductPage;
