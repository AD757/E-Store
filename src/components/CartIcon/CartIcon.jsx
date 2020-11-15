import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import {
  CartIconContainer,
  ShoppingIconStyled,
  ItemCount
} from "./CartIcon.styles";

const CartIcon = ({ toggleCartDropdownVisibility, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartDropdownVisibility}>
      <ShoppingIconStyled />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownVisibility: isCartDropdownHidden =>
    dispatch(toggleCartDropdown(isCartDropdownHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
