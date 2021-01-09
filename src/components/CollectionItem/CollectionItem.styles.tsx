import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  
  @media screen and (max-width: 800px) {
    width: 20vw;
    padding: 3px;
  }

`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  
  ${CollectionItemContainer}:hover {
    opacity: 0.8;
  }
  
  
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 2px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    width: 40vw;
    padding: 4px;
    font-size: 12px;
  }
`;

export const PriceContainer = styled.span`
  width: 10%;
  @media screen and (max-width: 800px) {
    width: 12vw;
    padding: 4px;
    font-size: 14px;
  }
`;
