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
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles};
`;
