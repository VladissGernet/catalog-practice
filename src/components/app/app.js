import React from "react";
import { GlobalStyle } from './styled.js';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import { PageContainer } from "/src/components/layout/page-container/page-container";
import {Product} from '/src/components/pages/product/product.jsx';
import { Catalog } from "/src/components/pages/catalog/catalog";

import {mockData} from 'src/mocks/mock-products';

function ProductOr404({ products }) {
  const { code } = useParams();
  const product = products.find((product) => product.code.toString() === code);
  return product ? (
    <Product product={product} />
  ) : (
    <h1>404 страница не найдена</h1>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<PageContainer />} >
          <Route index element={<Catalog data={mockData} />} />
          <Route path="catalog/">
            <Route path=":code" element={<Product data={mockData}/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
