import styled, { css } from 'styled-components';
import {CartDropdownContainer, CollectionItemContainer} from '..';

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #DB4437; 
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const buttonStyles = css`
  background-color: black;
  color: white;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

interface Props {
  isGoogleSignIn?: boolean,
  inverted?: boolean,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset' | undefined,
}

const getButtonStyles = (props: Props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button<Props>`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  border: none;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  
  ${getButtonStyles}
  
  ${CollectionItemContainer} & {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  
  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
  
  ${CartDropdownContainer} & {
    margin-top: auto;
  }
`;
