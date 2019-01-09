import React from 'react';
import CustomWrapper from '../CustomWrapper';
import { Select as AntdSelect } from 'antd';

const Option = AntdSelect.Option;

interface ISelectProps extends IDs {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  options: any[];
  onChange: any; // FUNCTION ???
  backgroundColor: string;
  borderColor: string;
}

const Select = ({ name, label, value, options, ...rest }: ISelectProps) => (
  <CustomWrapper {...rest}>
    <label htmlFor={name}>{label}</label>
    <AntdSelect value={value}>
      {options.map((option: any) => (
        <Option value={option.value}>{option.text}</Option>
      ))}
    </AntdSelect>
  </CustomWrapper>
);

Select.defaultProps = {
  name: 'identityType',
  label: 'Identity Type',
  value: 'singaporean',
  placeholder: 'Select One',
  backgroundColor: '#f7f7f7',
  borderColor: '#f1f3f4',
  fontSize: '1.5rem',
  options: [
    {
      value: 'singaporean',
      text: 'Singaporean',
    },
    {
      value: 'foreigner',
      text: 'Foreigner',
    },
  ],
};

export default Select;
