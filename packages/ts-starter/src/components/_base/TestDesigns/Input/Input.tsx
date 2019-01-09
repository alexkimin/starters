import React from 'react';
import CustomWrapper from '../CustomWrapper/CustomWrapper';

interface IInputCustomProps extends IDs {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: any; // ????
  backgroundColor: string;
  borderColor: string;
}

const InputCustom = (props: IInputCustomProps) => (
  <CustomWrapper {...props}>
    <label htmlFor={props.name}>{props.label}</label>
    <input
      type={'text'}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  </CustomWrapper>
);

InputCustom.defaultProps = {
  name: 'name',
  label: 'Name',
  value: '',
  placeholder: '',
  backgroundColor: '#f7f7f7',
  borderColor: '#f1f3f4',
};

export default InputCustom;
