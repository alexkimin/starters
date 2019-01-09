/**
 * Example BlueprintJS Component with Typescript + styled-component wrapping
 */
import React from 'react';
import { styled, withStyleGuide } from '@Styled';
import { Button } from 'antd';
// import 'antd/es/modal/style/index.css';
// TYPES
import { NativeButtonProps } from 'antd/es/button/button';

interface IButtonProps extends NativeButtonProps, IDs {
  color?: string;
}

// need to destruct to pass only valid props to ant component
const pickAntProps = ({ color, ...rest }: IButtonProps) => <Button {...rest} />;

const AntButton = styled(pickAntProps)<IButtonProps>`
  color: ${({ color }) => color};
`;
AntButton.defaultProps = {};

export default withStyleGuide<IButtonProps>(AntButton);
