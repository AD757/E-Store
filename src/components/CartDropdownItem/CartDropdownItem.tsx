import React from 'react';

import {
  CartItemContainer,
  ImageContainer,
  ItemDetailsContainer,
  NameContainer,
  PriceContainer,
} from './CartDropdownItem.styles';

import {CartItem} from '../../types';

interface Props {
  item: CartItem
}

export const CartDropdownItem = ({item: { imageUrl, price, name, quantity}}: Props) => (
  <CartItemContainer>
    <ImageContainer src={imageUrl} alt='item'/>
    <ItemDetailsContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{quantity} x ${price}</PriceContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);
