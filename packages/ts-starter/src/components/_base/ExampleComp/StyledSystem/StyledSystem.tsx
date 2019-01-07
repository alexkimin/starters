/**
 * Example Component with Styled-System and Typescript + styled-component wrapping
 */
import React, { Component } from 'react';
import { space, width, fontSize, color } from 'styled-system';
import { styled, acceleration } from '@Styled';
// TYPES
import {
  SpaceProps,
  ColorProps,
  WidthProps,
  FontSizeProps,
} from 'styled-system';

interface IExampleCompProps
  extends SpaceProps,
    ColorProps,
    WidthProps,
    FontSizeProps,
    IDs {
  onClick?: (s: any) => any;
}

const Example = styled('button')<IExampleCompProps>`
  display: flex;
  ${acceleration}
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

class StyledSystem extends Component<IExampleCompProps> {
  static defaultProps = {
    color: 'red',
  };
  private rootRef = React.createRef<HTMLButtonElement>();
  render() {
    const { children, ...rest } = this.props;
    return (
      <Example ref={this.rootRef} {...rest as Omit<IExampleCompProps, 'color'>}>
        {children}
      </Example>
    );
  }
}

/** @component */
export default StyledSystem;
