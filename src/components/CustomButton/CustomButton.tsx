import React from 'react';

import {CustomButtonContainer} from './CustomButton.styles';

export interface Props {
  children: any,
  isGoogleSignIn?: boolean,
  inverted?: boolean,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset' | undefined,
}

export const CustomButton = React.memo(({ children, ...props }: Props) => (
  <CustomButtonContainer {...props}>
    {children}
  </CustomButtonContainer>
));