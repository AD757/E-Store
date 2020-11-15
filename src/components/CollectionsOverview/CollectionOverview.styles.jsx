import styled from "styled-components";

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 16px;
  }
`;
