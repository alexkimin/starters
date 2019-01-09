import React from 'react';
import { styled, withStyleGuide, acceleration } from '@Styled';

interface IExampleCompProps extends IDs {
  backgroundColor: string;
}

const Field = styled('div')<IExampleCompProps>`
  ${acceleration}
  display: flex;
  flex-flow: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 8px 16px;
  border: 1px solid #f1f3f4;
  border-radius: 6px;

  input {
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: 1.5em;
    font-family: inherit;
    border: 0;
    border-radius: 0;
    padding: 0;
    cursor: text;
  }

  input:focus {
    outline: 0;
  }
`;

Field.defaultProps = {};

// TYPE
interface Props {
  label: string;
  value: string;
  backgroundColor: string;
}

// COMPONENT
const Input = (props: Props) => (
  <Field {...props}>
    <label>{props.label}</label>
    <input type="text" value={props.value} />
  </Field>
);

// DEFAULT PROPS
Input.defaultProps = {
  label: 'Name',
  value: '',
  backgroundColor: '#f7f7f7',
};

export default withStyleGuide(Input);
