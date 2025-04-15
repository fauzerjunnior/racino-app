import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
  }

  body {
    background: ${(props) => props.theme.backgroundColor};
    font-size: 16px;
    letter-spacing: -0.5px;
  }
`;
