import React from 'react';
import { connect } from 'react-redux';

import { SignInOutButton } from './SignInOutButton';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';
import { CartIcon, CardDropdown } from '..';
import { ReactComponent as Logo } from '../../assets/store.svg';

import { RootState, selectIsLoggedIn, selectCartHidden } from '../../redux';

interface StateProps {
  readonly isLoggedIn: boolean,
  readonly hidden: boolean
}

type Props = StateProps;

const componentHeader = ({ isLoggedIn, hidden }: Props) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      <SignInOutButton isLoggedIn={isLoggedIn}/>
      <CartIcon/>
    </OptionsContainer>
    {hidden ? null : <CardDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: selectIsLoggedIn(state),
  hidden: selectCartHidden(state),
});

export const Header = connect(mapStateToProps)(componentHeader);
