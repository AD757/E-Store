import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartDropdown } from "../../redux/cart/cartActions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CustomButtonStyled
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>

      <CustomButtonStyled
        onClick={() => {
          dispatch(toggleCartDropdown());
          history.push("/checkout");
        }}
      >
        GO TO CHEKCOUT
      </CustomButtonStyled>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
