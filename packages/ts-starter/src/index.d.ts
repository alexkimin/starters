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

// Utils
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
