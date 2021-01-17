import React from 'react';
import {connect} from 'react-redux';

import {CollectionsOverviewContainer} from './CollectionsOverview.styles';
import {RootState, selectDirectoryShop} from '../../redux';
import {ShopData} from '../../types';
import {CollectionPreview} from '..';

interface StateProps {
  readonly shop: {
    [routeName: string]: ShopData
  }
}

type Props = StateProps;

export const componentCollectionsOverview = ({shop}: Props) => (
  <CollectionsOverviewContainer>
    {Object.values(shop).map((data: ShopData) => (
      <CollectionPreview key={`shopdata${data.id}`} data={data}/>
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = (state: RootState) => ({
  shop: selectDirectoryShop(state)
});

export const CollectionsOverview = connect(mapStateToProps)(componentCollectionsOverview);
