import { createGlobalStyle } from 'styled-components';
import { Fontes } from './fonts';

export default createGlobalStyle`
  ${Fontes};
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none;
  }

  html, body, #root {
    height: 100%;
  }
`;
