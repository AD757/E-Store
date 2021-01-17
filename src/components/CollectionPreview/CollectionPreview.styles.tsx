import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
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
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;