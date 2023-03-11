import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Merriweather";
    src: url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --main-color: #000000;
    --text-color: #ffffff;
    --accent-color: #fef2b2;
    --header-height: 70px;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: "Merriweather";
    color: var(--text-color);
    background-color: var(--main-color);
  }  
`;

export default GlobalStyle;
