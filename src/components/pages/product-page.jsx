import React from "react";

import {PageContainer} from 'src/components/layout/page-container/page-container';
import {StyledTitle} from './styled';
import {TitleSizes} from 'src/components/ui/title/title';

const ProductPage = () => {
  return (
    <PageContainer>
      <StyledTitle size={TitleSizes.BIG}>3D-Принтер</StyledTitle>
    </PageContainer>
  );
};

export default ProductPage;
