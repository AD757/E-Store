import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageContainer from "../CollectionPage/CollectionPageContainer";
import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
