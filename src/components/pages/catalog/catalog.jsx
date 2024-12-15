import React from "react";

import {StyledList, StyledLink, StyledImage, StyledListItem} from './styled';

import {Price} from 'src/components/blocks/price/price';

const Catalog = ({data}) => {

  return (
    <section>
      <h1>Каталог</h1>
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
    </section>
  );
};

export { Catalog };
