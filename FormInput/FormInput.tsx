import React, {ChangeEvent} from 'react';
import cn from 'classnames';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabelContainer,
} from './FormInput.styles';

interface Props {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  label?: string | null,
  name: string,
  value: string,
  type: string,
  required?: boolean
}

export const FormInput = ({ handleChange, label = null, ...otherProps }: Props) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps}/>
    { label ? (<FormInputLabelContainer className={cn(otherProps.value.length ? 'shrink' : null)}
       htmlFor={otherProps.name}>{label}</FormInputLabelContainer>) : null }
  </GroupContainer>
);