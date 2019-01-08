/**
 * Example Component with Ant Design and Typescript + styled-component wrapping
 */
import React from 'react';
import { styled, withStyleGuide, acceleration } from '@Styled';
import { Button } from 'antd';
import 'antd/es/button/style/index.css';
// TYPES
import { NativeButtonProps } from 'antd/es/button/button';

interface IButtonProps extends IDs, NativeButtonProps {
  color: string;
  test: string;
}

// need to destruct to pass only valid props to ant component
const pickAntProps = ({ color, test, ...rest }: IButtonProps) => (
  <Button {...rest} />
);

const AntDesign = styled(pickAntProps)<IButtonProps>`
  ${acceleration}
  color: ${({ color }) => color} !important;
`;

export default withStyleGuide<IButtonProps>(AntDesign);
