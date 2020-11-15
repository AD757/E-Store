import styled from "styled-components";

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export { CollectionPageContainer, Title, Items };
