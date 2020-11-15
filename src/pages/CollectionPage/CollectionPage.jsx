import React from "react";
import { connect } from "react-redux";
import { selectShopCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

import { CollectionPageContainer, Title, Items } from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
