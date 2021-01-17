import React from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  CartDropdownContainer,
  CartDropdownItem,
  CartItemsContainer,
  CustomButton, EmptyMessageContainer,
} from '..';

import {CartItem} from '../../types';
import {RootState, selectCartItems, hideCartDropdown} from '../../redux';

interface StateProps {
  cartItems: CartItem[]
}

interface DispatchProps {
  dispatch: Dispatch
}

type Props = StateProps & DispatchProps & RouteComponentProps;

const componentCardDropdown = ({cartItems, history, dispatch}: Props) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ?
        cartItems.map(cartItem => (
          <CartDropdownItem key={`cdi${cartItem.id}`} item={cartItem}/>
        )) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )
      }
    </CartItemsContainer>
    <CustomButton onClick={() => {
      dispatch(hideCartDropdown());
      history.push('/checkout');
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = (state: RootState): StateProps => ({
  cartItems: selectCartItems(state),
});

export const CardDropdown = withRouter(connect(mapStateToProps)(componentCardDropdown));
