import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media only screen and (max-width: 600px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    margin-left: -45px;
 
  }

  
`;
