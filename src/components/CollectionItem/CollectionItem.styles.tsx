import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
  width: 22vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 0;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    width: 30vw;
    margin-bottom: 20px;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
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
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 85%;
  text-align: left;
  margin-bottom: 15px;
  @media screen and (max-width: 991px) {
    width: 75%; 
  }
`;

export const PriceContainer = styled.span`
  width: 15%;
  text-align: right;
  @media screen and (max-width: 991px) {
    width: 25%;
  }
`;