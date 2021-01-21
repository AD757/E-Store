import styled from 'styled-components';
import {CollectionItemContainer} from '../../components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const ItemsContainer = styled.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  justify-items: center;
  & > div {
    margin-bottom: 30px;
  }

  ${CollectionItemContainer} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;