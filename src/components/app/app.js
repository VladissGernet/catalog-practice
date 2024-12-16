import React, {createContext} from "react";
import { GlobalStyle } from './styled.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Данные продуктов.
import {mockData} from 'src/mocks/mock-products';

import { PageContainer } from "/src/components/layout/page-container/page-container";
import { ProductOr404 } from "/src/components/blocks/product-or-404/product-or-404";
import { Catalog } from "/src/components/pages/catalog/catalog";

const ProductContext = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ProductContext.Provider value={mockData}>
        <Routes>
          <Route path="/" element={<PageContainer />} >
            <Route index element={<Catalog />} />
            <Route path="catalog/">
              <Route
                path=":code"
                element={<ProductOr404 />}
              />
            </Route>
            <Route
              path="*"
              element={<ProductOr404 />}
            />
          </Route>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export { App, ProductContext };
