import React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';

import {CollectionItem} from '../../components';
import {CollectionPageContainer, TitleContainer, ItemsContainer} from './Collection.styles';
import {ShopData} from '../../types';
import {RootState, selectDirectoryShopCategory} from '../../redux';

import {Page404} from '..';

interface CategoryParams {
  readonly category: string
}

interface LocalProps {
  readonly data: ShopData | undefined
}

type Props = LocalProps & RouteComponentProps;

export const componentCollection = ({data, ...routeComponentProps}: Props) => {
  if (data) {
    const {
      title, items, id,
    } = data;
    return (
      <CollectionPageContainer>
        <TitleContainer>{ title }</TitleContainer>
        <ItemsContainer>
          {
            items.map(item => <CollectionItem key={`cmpColl${id}item${item.id}`} data={item}/>)
          }
        </ItemsContainer>
      </CollectionPageContainer>
    );
  } else {
    return <Page404 {...routeComponentProps}/>
  }

};

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps) => ({
  data: selectDirectoryShopCategory(state)((ownProps.match.params as CategoryParams).category)
});

export const Collection = connect(mapStateToProps)(componentCollection);
