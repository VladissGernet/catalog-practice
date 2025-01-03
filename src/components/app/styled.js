import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;

    ${'' /* для фикса проблемы с прокруткой */}
    margin-left: calc(100vw - 100%);
  }

  body,
  html {
    margin: 0;
  }

  img {
    border-style: none;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
    background-color: ${(props) => props.theme.colorBackground};
    box-sizing: border-box;
  }
`;
