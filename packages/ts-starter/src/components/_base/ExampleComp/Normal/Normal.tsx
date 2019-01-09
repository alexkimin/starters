/**
 * Example Component with Typescript + styled-component wrapping
 */
import { styled, withStyleGuide } from '@Styled';

interface IExampleCompProps extends IDs {
  onClick?: (s: any) => any;
  color: string;
}

// as a styled-component
const Normal = styled('button')<IExampleCompProps>`
  width: 100px;
  text-align: center;
  color: ${({ color }) => color};
`;

Normal.defaultProps = {
  onClick: () => {},
};

export default withStyleGuide<IExampleCompProps>(Normal);
