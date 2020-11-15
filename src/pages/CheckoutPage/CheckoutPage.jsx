import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  StripeCheckoutButtonStyled,
  Total,
  TestWarning
} from "./CheckoutPage.styles";

const CheckoutPage = ({ cartItems, cartItemsTotalSumm }) => (
  <CheckoutPageContainer>
    <CheckoutHeader>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <Total>TOTAL: ${cartItemsTotalSumm}</Total>
    <StripeCheckoutButtonStyled price={cartItemsTotalSumm} />
    <TestWarning>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: [current_month] / [current_year] - CVV: 123
    </TestWarning>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartItemsTotalSumm: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
