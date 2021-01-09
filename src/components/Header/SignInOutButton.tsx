import React from 'react';

import {OptionLink} from './Header.styles';
import {auth} from '../../firebase/firebase.utils';

interface Props {
  isLoggedIn: boolean,
}

export const SignInOutButton = React.memo(({isLoggedIn}: Props) => {
  if (isLoggedIn) {
    return <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>;
  } else {
    return <OptionLink to='/signin'>SIGN IN</OptionLink>;
  }
});
