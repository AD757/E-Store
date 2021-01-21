import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 0 10px;
    width: 100vw;
  }
`;