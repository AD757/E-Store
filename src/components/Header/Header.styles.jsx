import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  

`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media only screen and (max-width: 600px) {
    width: 100px;
    margin-left: -50px;
}

`;

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 600px) {
    width: 175px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
}

`;

const OptionLink = styled(Link)`
  padding: 10px 15px;
  opacity: 0.8;

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: #4285f4;
  }
`;

export { HeaderContainer, LogoContainer, OptionsContainer, OptionLink };
