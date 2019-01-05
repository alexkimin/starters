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
interface Dynamic {
  [key: string]: any;
}

type valueof<T> = T[keyof T];

// Libs
declare module 'react-pdf' {
  import * as React from 'react';

  interface CommonPdfProps {
    error?: React.ReactNode | Function;
    // TODO: Change to real ref type
    inputRef?: (ref: any) => void;
    loading?: React.ReactNode | Function;
    noData?: React.ReactNode | Function;
    onLoadError?: (error: Error) => void;
    onLoadSuccess?: (pdf: Pdf) => void;
  }

  interface Pdf {
    numPages: number;
  }

  interface DocumentProps extends CommonPdfProps {
    file: string | File;

    onItemClick?: (pageNumber: number) => void;
    onSourceError?: (error: Error) => void;
    rotate?: 0 | 90 | 180 | 270;
  }
  class Document extends React.Component<DocumentProps> {}

  interface PageProps extends CommonPdfProps {
    customTextRenderer?: (
      args: { str: string; itemIndex: number },
    ) => React.ReactNode;
    onRenderError?: (error: Error) => void;
    onRenderSuccess?: () => void;
    // TODO: Add array typings
    onGetAnnotationsSuccess?: (annotations: any[]) => void;
    onGetAnnotationsError?: (error: Error) => void;
    // TODO: Add array typings
    onGetTextSuccess?: (items: any[]) => void;
    onGetTextError?: (error: Error) => void;

    pageIndex?: number;
    pageNumber?: number;
    renderAnnotations?: boolean;
    renderTextLayer?: boolean;
    rotate?: 0 | 90 | 180 | 270;
    scale?: number;
    width?: number;
  }
  class Page extends React.Component<PageProps> {}

  interface OutlineProps {
    onItemClick?: (pageNumber: number) => void;
    onLoadError?: (error: Error) => void;
    onLoadSuccess?: (pdf: Pdf) => void;
    onParseError?: (error: Error) => void;
    // TODO: Add array typings
    onParseSuccess?: (outline: any[]) => void;
  }
  class Outline extends React.Component<OutlineProps> {}
}
