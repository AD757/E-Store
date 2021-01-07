import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 5px 5px #ccc;
  padding: 10px;
  margin: 10px;

  @media only screen and (max-width: 800px) {
  padding: 5px;
  margin: auto;
  box-shadow: 2px 2px 2px #ccc;
}

`;

