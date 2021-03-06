import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  &:hover {
        cursor: pointer;
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  justify-items: center;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;