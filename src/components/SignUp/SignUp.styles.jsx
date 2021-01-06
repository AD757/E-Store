import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media only screen and (max-width: 600px) {
  display: flex;
  flex-direction: column;

  }
`;

const Title = styled.h2`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  width: 45%;
  
`;



export { SignUpContainer, Title };
