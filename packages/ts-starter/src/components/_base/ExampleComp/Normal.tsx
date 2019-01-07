/**
 * Example Component with Typescript + styled-component wrapping
 */
// import React, { Component } from 'react';
import { styled, acceleration } from '@Styled';

interface IExampleCompProps extends IDs {
  onClick?: (s: any) => any;
  color: string;
}

// as a styled-component
const ExampleComp = styled('button')<IExampleCompProps>`
  ${acceleration}
  display: flex;
  width: 100px;
  color: ${({ color }) => color};
`;

ExampleComp.defaultProps = {
  onClick: () => {},
};

export default ExampleComp;

// as a class

// class Example extends Component<IExampleCompProps> {
//   static defaultProps = {
//     onClick: () => {},
//   };
//   render() {
//     const { onClick, ...rest } = this.props;
//     return (
//       <div onClick={onClick}>
//         <ExampleComp {...rest} />
//       </div>
//     );
//   }
// }
// export default Example;
