import React from 'react';
import {connect} from 'react-redux';

import {ShopItem} from '../../types';
import {CustomButton} from '..';
import {
  CollectionItemContainer,
  ImageContainer,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

import {addCartItem, CartAction} from '../../redux';

interface DispatchProps {
  addCartItem: (item: ShopItem) => CartAction,
}

interface OwnProps {
  data: ShopItem,
}

type Props = OwnProps & DispatchProps;

export const componentCollectionItem = ({data, addCartItem}: Props) => {
  const {imageUrl, name, price} = data;
  return (
    <CollectionItemContainer className='noselect'>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})`}}/>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButton onClick={() => addCartItem(data)} inverted>Add</CustomButton>
    </CollectionItemContainer>
  );
};

export const CollectionItem = connect(null, {addCartItem})(componentCollectionItem);



