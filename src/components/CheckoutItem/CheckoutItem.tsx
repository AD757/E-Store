import React from 'react';
import {connect} from 'react-redux';

import {removeCartItem, addCartItem, reduceCartItem} from '../../redux';
import {CartItem} from '../../types';
import {
  CheckoutItemContainer,
  ImageContainerContainer,
  ImageContainer,
  QuantityContainer,
  NumberContainer,
  NameContainer,
  PriceContainer,
  UpArrowContainer,
  DownArrowContainer,
  RemoveButtonContainer,
} from './CheckoutItem.styles';

interface DispatchProps {
  addCartItem: (item: CartItem) => void,
  removeCartItem: (item: CartItem) => void,
  reduceCartItem: (item: CartItem) => void,
}

interface LocalProps {
  item: CartItem
}

type Props = DispatchProps & LocalProps;

export const componentCheckoutItem = ({item, reduceCartItem, removeCartItem, addCartItem}: Props) => {
  const {
    name,
    price,
    quantity,
    imageUrl,
  } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainerContainer>
        <ImageContainer src={imageUrl} alt='item'/>
      </ImageContainerContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer className='noselect'>
        <UpArrowContainer className='noselect' onClick={() => addCartItem(item)}>&#10148;</UpArrowContainer>
        <DownArrowContainer className='noselect' onClick={() => reduceCartItem(item)}>&#10148;</DownArrowContainer>
        <NumberContainer className='noselect'>{quantity}</NumberContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButtonContainer onClick={() => removeCartItem(item)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = {
  addCartItem,
  removeCartItem,
  reduceCartItem,
};

export const CheckoutItem = connect(null, mapDispatchToProps)(componentCheckoutItem);
