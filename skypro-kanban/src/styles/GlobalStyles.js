import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.textPrimary};
    background-color: ${props => props.theme.background};

    *:focus {
    outline: none;
    }
  }

  input, textarea, button {
    font-family: inherit;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.background};
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 24px;
    color: #333;
  }
`;

export default GlobalStyle;