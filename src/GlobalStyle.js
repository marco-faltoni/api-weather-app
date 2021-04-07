import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Ubuntu', sans-serif;
    width:100%;
    background-color: #18558c;
    color: #517daa;
  }
`;

export {
  GlobalStyles
}