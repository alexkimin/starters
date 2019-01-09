import { createGlobalStyle, css } from '@Styled';

const fontFaces = css`
  /* Montserrat Family */
  @font-face {
    font-family: 'Montserrat Bold';
    src: url('./assets/fonts/Montserrat/Montserrat-Bold.ttf') format('ttf');
  }

  /* Muli Family */
  @font-face {
    font-family: 'Muli Bold';
    src: url('./assets/fonts/Muli/Muli-Bold.ttf') format('ttf');
  }

  /* Poppins Family */
  @font-face {
    font-family: 'Poppins Regular';
    src: url('./assets/fonts/Poppins/Poppins-Regular.ttf') format('ttf');
  }
  @font-face {
    font-family: 'Poppins SemiBold';
    src: url('./assets/fonts/Poppins/Poppins-SemiBold.ttf') format('ttf');
  }
`;

export const GlobalStyle = createGlobalStyle`

  ${fontFaces}

  /* Normalize - MiniReset.css */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,
  figure,fieldset,legend,textarea,pre,iframe,
  hr,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }
  h1,h2,h3,h4,h5,h6 {
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
