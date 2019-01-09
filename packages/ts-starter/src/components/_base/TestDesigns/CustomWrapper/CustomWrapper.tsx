import { styled, withStyleGuide } from '@Styled';

interface IFieldProps {
  backgroundColor: string;
  borderColor: string;
  fontSize: string;
}

const CustomWrapper = styled('div')<IFieldProps>`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 8px 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 6px;
  overflow: hidden;

  input {
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize};
    font-family: inherit;
    border: 0;
    border-radius: 0;
    padding: 0;
    cursor: text;
  }

  input:focus {
    outline: 0;
  }

  select {
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    font-size: ${({ fontSize }) => fontSize};
  }

  select:focus {
    outline: none;
  }

  .ant-select-selection {
    border: none;
    box-shadow: none !important;
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-size: ${({ fontSize }) => fontSize};
  }

  .ant-select-selection__rendered {
    margin: 0px;
  }
`;

CustomWrapper.defaultProps = {
  backgroundColor: '#f7f7f7',
  borderColor: '#f1f3f4',
  fontSize: '1.5rem',
};

export default withStyleGuide(CustomWrapper);
