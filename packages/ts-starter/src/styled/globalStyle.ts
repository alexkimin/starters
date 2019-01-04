import { createGlobalStyle } from '@Styled';

// todo: depends on the antd usage, configure css properly.
// font-family, font-size
export const GlobalStyle = createGlobalStyle`
  /* Fonts */
  /* @font-face {
    font-family: 'Open Sans';
    src: url('./assets/fonts/OpenSans/OpenSans-Regular.ttf') format('ttf');
  } */

  /* Normalize - MiniReset.css */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,
  figure,fieldset,legend,textarea,pre,iframe,
  hr,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    font-size: 100% !important;
    font-family: inherit !important;
  }
  h1,h2,h3,h4,h5,h6 {
    font-size: 100%;
    font-weight: normal;
  }
  ul {
    list-style: none;
  }
  button,input,select,textarea {
    margin: 0;
  }
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  img,embed,iframe,object,
  audio,video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,th {
    padding: 0;
    text-align: left;
  }
`;
