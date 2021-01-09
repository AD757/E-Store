import React from 'react';

import {SignIn, SignUp} from '../../components';
import {SignInAndSignUpContainer} from './SignInAndSignUp.styles';

export const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn/>
    <SignUp/>
  </SignInAndSignUpContainer>
);
