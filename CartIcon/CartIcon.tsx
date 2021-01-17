import React from 'react';
import {Dispatch} from 'redux';

import { connect } from 'react-redux';
import {RootState, toggleCartDropdown, selectCartItemCount} from '../../redux';

import {CartItemContainer, ItemCountContainer, ShoppingIconContainer} from './CartIcon.styles';

interface StateProps {
  totalItems: number,
}

interface DispatchProps {
  toggleCartDropdown: () => void
}

type Props = DispatchProps & StateProps;

const componentCartIcon = ({toggleCartDropdown, totalItems}: Props) => {
  return (
    <CartItemContainer className='noselect' onClick={toggleCartDropdown}>
      <ShoppingIconContainer/>
      <ItemCountContainer>{totalItems}</ItemCountContainer>
    </CartItemContainer>
  );
};

const mapStateToProps = (state: RootState): StateProps => ({
  totalItems: selectCartItemCount(state)
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(componentCartIcon) ;
