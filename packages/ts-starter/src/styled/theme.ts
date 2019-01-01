// Colors
type Color = {
  example: string;
};
type ColorBase = {
  white: string;
};
const colorBase: ColorBase = {
  white: '#ffffff',
};
const color: Color = {
  example: colorBase.white,
};

// Theme obj
export interface ThemeInterface {
  color: Color;
}
export const theme: ThemeInterface = {
  color,
};
