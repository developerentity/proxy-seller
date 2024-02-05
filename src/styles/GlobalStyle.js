import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "San Francisco", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Helvetica Neue", Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.65;
    color: #333; 
    line-height: 1;
    background: #f0f0f0;
  };
  ol, ul {
    list-style: none;
  };
  a:link {
    text-decoration: none;
  };
`;

export default GlobalStyle;
