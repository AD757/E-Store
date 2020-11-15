import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

import {
  CollectionItemContainer,
  Image,
  CustomButtonStyled,
  CollectionFooter,
  Name,
  Price
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const image = `url(${imageUrl})`;

  return (
    <CollectionItemContainer>
      <Image imgSrc={image}></Image>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <CustomButtonStyled onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButtonStyled>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
