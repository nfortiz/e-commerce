import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    margin: 0;
  }

  h1,
  .text-xxl {
    font-size: ${(props) => props.theme.fontSizes[6]};
  }

  h2,
  .text-xl {
    font-size: ${(props) => props.theme.fontSizes[5]};
  }

  h3,
  .text-lg {
    font-size: ${(props) => props.theme.fontSizes[4]};
  }

  h4,
  .text-md {
    font-size: ${(props) => props.theme.fontSizes[3]};
  }

  p,
  .text-base {
    font-size: ${(props) => props.theme.fontSizes[2]};
  }

  small,
  .text-sm {
    font-size: ${(props) => props.theme.fontSizes[0]};
  }

  ul, li {
    margin: 0;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  input::placeholder {
    font-family: 'Roboto';
  }
`;

export default GlobalStyles;
