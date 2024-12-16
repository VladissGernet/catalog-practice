import React, {createContext} from "react";
import { GlobalStyle } from './styled.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Данные продуктов.
import {mockData} from 'src/mocks/mock-products';

import { ScrollToTop } from "../blocks/scroll-to-top/scroll-to-top";
import { PageContainer } from "/src/components/layout/page-container/page-container";
import { Product } from "/src/components/pages/product/product";
import { Page404 } from "../pages/page-404/page-404";
import { Catalog } from "/src/components/pages/catalog/catalog";

const ProductContext = createContext();

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <ProductContext.Provider value={mockData}>
        <Routes>
          <Route path="/" element={<PageContainer />} >
            <Route index element={<Catalog />} />
            <Route path="catalog/">
              <Route
                path=":code"
                element={<Product />}
              />
            </Route>
            <Route
              path="*"
              element={<Page404 />}
            />
          </Route>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export { App, ProductContext };
