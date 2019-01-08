import React from 'react';

interface IwithStyleGuide {}

export const withStyleGuide = <P extends IwithStyleGuide>(Comp: any) => (
  props: P,
) => <Comp {...props} />;
