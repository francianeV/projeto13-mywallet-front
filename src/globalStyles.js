import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body{
    background-color: #8C11BE;
    font-family: 'Raleway', sans-serif;
    font-family: 'Saira Stencil One', cursive;
  }
`;

export default GlobalStyle;
