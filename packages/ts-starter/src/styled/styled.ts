import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ThemeInterface } from '@Styled';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider, styled };
