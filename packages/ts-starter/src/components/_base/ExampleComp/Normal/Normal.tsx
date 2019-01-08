/**
 * Example Component with Typescript + styled-component wrapping
 */
// import React from 'react';
import { styled, withStyleGuide, acceleration } from '@Styled';

interface IExampleCompProps extends IDs {
  onClick?: (s: any) => any;
  color: string;
}

// as a styled-component
const Normal = styled('button')<IExampleCompProps>`
  ${acceleration}
  display: flex;
  width: 100px;
  color: ${({ color }) => color};
`;

Normal.defaultProps = {
  onClick: () => {},
};

export default withStyleGuide<IExampleCompProps>(Normal);

// as a class

// class Normal extends Component<IExampleCompProps> {
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
// export default Normal;
