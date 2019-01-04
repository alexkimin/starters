// file related
declare module '*.json';

// Image related
declare module '*.jpg';
declare module '*.png';
declare module '*.gif';
declare module '*.ico';
declare module '*.bmp';
declare module '*.svg';

// Font
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.ttf';
declare module '*.otf';

// Global Interface/Types
interface IDs {
  id?: string;
  'data-test-id'?: string;
  role?: string;
}
type TIDs = {
  id?: string;
  'data-test-id'?: string;
  role?: string;
};

// Utils
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
