import React from 'react';
import {connect} from 'react-redux';

import {RootState, selectCartItems, selectCartTotal} from '../../redux';
import {CartItem} from '../../types';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  TestWarningContainer,
} from './Checkout.styles';
import {CheckoutItem, StripeCheckoutButton} from '../../components';

import './Checkout.scss';

interface StateProps {
  cartItems: CartItem[],
  cartTotal: number,
}

type Props = StateProps;

export const componentCheckout = ({cartItems, cartTotal}: Props) => {
  return (
    <CheckoutPageContainer className='checkout-page'>
      <CheckoutHeaderContainer className='checkout-header'>
        <HeaderBlockContainer className='header-block'>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer className='header-block'>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
        cartItems.map(cartItem => <CheckoutItem key={`ci${cartItem.id}`} item={cartItem}/>)
      }
      <TotalContainer>${cartTotal}</TotalContainer>
      <TestWarningContainer>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton price={cartTotal}/>
    </CheckoutPageContainer>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

export const Checkout = connect(mapStateToProps)(componentCheckout);
