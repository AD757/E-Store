import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/store.svg";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import { selectIsCartDropdownHidden } from "../../redux/cart/cartSelectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./Header.styles";

const Header = ({ currentUser, isCartDropdownHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
      <OptionLink to="/">HOME</OptionLink>
        <OptionLink to="/shop">SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isCartDropdownHidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropdownHidden: selectIsCartDropdownHidden
});

export default connect(mapStateToProps)(Header);
