import React from "react";
import { GlobalStyle } from './styled.js';

import ProductPage from '/src/components/pages/product-page.jsx';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <ProductPage />
    </>
  );
}
