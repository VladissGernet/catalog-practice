import React, {useContext} from "react";

import {StyledSection, StyledList, StyledLink, StyledImage, StyledListItem} from './styled';

import {ProductContext} from 'src/components/app/app';
import {Price} from 'src/components/ui/price/price';
import { Title, TitleSizes } from 'src/components/ui/title/title';


const Catalog = () => {
  const data = useContext(ProductContext);

  return (
    <StyledSection>
      <Title level={1} size={TitleSizes.BIG}>Каталог</Title>
      <StyledList>
        {data && data.length && data.map((product) => {
          return (
            <StyledListItem key={product.code}>
              <StyledLink to={`/catalog/${product.code}`}>
                <h2>{product.title}</h2>
                <StyledImage src={product.images[0]} alt={product.title} />
                <Price>{product.price}</Price>
              </StyledLink>
            </StyledListItem>
        );
        })}
      </StyledList>
    </StyledSection>
  );
};

export { Catalog };

