import styled, { css } from "styled-components";
const mainColor = "black";
const secondaryColor = "white";

const buttonStyles = css`
  background-color: ${mainColor};
  color: ${secondaryColor};
  border: none;

  &:hover {
    background-color: ${secondaryColor};
    color: ${mainColor};
    border: 1px solid currentColor;
  }
`;

const invertedButtonStyles = css`
  background-color: ${secondaryColor};
  color: ${mainColor};
  border: 1px solid ${mainColor};

  &:hover {
    background-color: ${mainColor};
    color: ${secondaryColor};
  }
`;

const googleSignInStyles = css`
  background-color: #DB4437;  
  color: white;
  border: 1px solid currentColor;

  &:hover {
    background-color: #4285f4;
    color: white;
    border: 1px solid ${mainColor};
  }
  
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles};

  @media only screen and (max-width: 600px) {
  min-width: 50px;
  height: 30px;
  letter-spacing: 0.5px;
  line-height: 30px;
  padding: 0 45px 0 45px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  
  }

`;
