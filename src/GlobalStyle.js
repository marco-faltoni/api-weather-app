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
    position: relative;
    .App {
      min-height: 100vh;
      width: 100%;
      .user-no-position {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;

export {
  GlobalStyles
}