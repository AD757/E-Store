import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media screen and (max-width: 800px) {
    width: 50%;
    margin: 0 auto;
  }
`;

const Title = styled.h2`
  margin: 10px 0;
`;

export { SignUpContainer, Title };