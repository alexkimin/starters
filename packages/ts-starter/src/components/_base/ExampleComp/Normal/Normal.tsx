/**
 * Example Component with Typescript + styled-component wrapping
 */
import React from 'react';
import { styled, acceleration } from '@Styled';

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

export default (props: IExampleCompProps) => <Normal {...props} />;

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
