/**
 * Example Component with Ant Design and Typescript + styled-component wrapping
 */
import React from 'react';
import { Button } from 'antd';
import { styled, acceleration } from '@Styled';
// TYPES
import { NativeButtonProps } from 'antd/es/button/button';

type TButtonProps = NativeButtonProps &
  IDs & {
    color: string;
    test: string;
  };

// need to destruct to pass only valid props to ant component
const pickAntProps = ({ color, test, ...rest }: TButtonProps) => (
  <Button {...rest} />
);

const ExampleComp = styled(pickAntProps)<TButtonProps>`
  ${acceleration}
  color: ${({ color }) => color} !important;
`;

export default ExampleComp;
