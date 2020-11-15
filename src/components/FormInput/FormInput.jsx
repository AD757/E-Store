import React from "react";

import { Group, FormInputStyled, FormInputLabel } from "./FormInput.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <FormInputStyled type="text" onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      ) : null}
    </Group>
  );
};

export default FormInput;
