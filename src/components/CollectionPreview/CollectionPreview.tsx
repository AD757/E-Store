import React from 'react';

import {ShopData} from '../../types';
import {CollectionItem} from '..';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer
} from './CollectionPreview.styles';

interface StateProps {
  readonly data: ShopData
}

type Props = StateProps;

export const CollectionPreview = ({ data }: Props) => {
  const {
    items,
    id,
    title,
  } = data;
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {
          items.filter((item, i) => i < 4).map(item => (<CollectionItem key={`shopdata${id}item${item.id}`} data={item}/>))
        }
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};
