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
    FontSizeProps {
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

class ExampleComp extends Component<IExampleCompProps> {
  static defaultProps = {};
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

export default ExampleComp;
