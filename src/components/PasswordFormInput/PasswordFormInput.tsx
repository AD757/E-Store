import React, {useState} from 'react';
import ReactPasswordStrength from "react-password-strength";
import cn from 'classnames';

import './PasswordFormInput.scss';

interface Props {
  handleChange: (score: any, password: string, isValid: boolean) => void,
  name: string,
  label: string,
  value: string,
  required?: boolean,
  passRef?: ((ref: any) => void) | null,
}

export const PasswordFormInput = ({value = '', label, handleChange, name, passRef = null, ...rest}: Props) => {
  const [focused, onFocus] = useState(false);
  return (
    <div className='group ReactPassword'>
      <ReactPasswordStrength ref={passRef}
        changeCallback={handleChange}
        inputProps={{
          name,
          onFocus: () => onFocus(true),
          onBlur: () => onFocus(false),
          ...rest
        }}/>
      { label || focused ? (<label
        className={cn('form-input-label', (value.length || focused) ? 'shrink' : null)}
        htmlFor={name}>{label}</label>) : null }
    </div>
  );
};