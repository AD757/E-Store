import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionsForPreview } from "../../redux/shop/shopSelectors";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

import { CollectionsOverviewContainer } from "./CollectionOverview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
