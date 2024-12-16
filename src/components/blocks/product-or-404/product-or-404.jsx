import React, {useContext} from "react";
import { useParams } from "react-router-dom";

import {ProductContext} from 'src/components/app/app';
import {Product} from '/src/components/pages/product/product';

const ProductOr404 = () => {
  const {code} = useParams(); // Получаем код продукта на который кликнули.
  const data = useContext(ProductContext);
  const product = data.find((product) => product.code === code);

  return product ? (
    <Product product={product} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

export {ProductOr404};
