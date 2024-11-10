import React from "react";

import {PageContainer} from 'src/components/layout/page-container/page-container';
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';
import {Code} from 'src/components/ui/code/code';

const ProductPage = () => {
  return (
    <PageContainer>
      <header>
        <StyledTitle size={TitleSizes.BIG}>3D-Принтер</StyledTitle>
        <Code>123456</Code>
      </header>
    </PageContainer>
  );
};

export default ProductPage;
