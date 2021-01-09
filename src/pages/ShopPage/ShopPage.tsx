import React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';

import {CollectionsOverview} from '../../components/';
import {Collection} from '..';

interface LocalProps {

}

type Props = LocalProps & RouteComponentProps;

export const ShopPage = ({ match }: Props) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path={`${match.path}/:category`} component={Collection}/>
  </div>
);
