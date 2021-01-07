import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";
const Image = styled.div`
  background-image: ${({ imgSrc }) => imgSrc};
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  margin-left: -10px;
  justify-content: space-between;
  
  @media only screen and (max-width: 600px) {
  width: 90%;
  height: 50%;
  font-size: 16px;
  text-align: left;
  margin-left: -10px;
  justify-content: space-between;
  }
`;
const CustomButtonStyled = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media only screen and (max-width: 600px) {
  width: 100%;
  position: absolute;
  display: none;
  padding: 2px;
  
  margin-bottom: 30px;
  }
`;

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }

    ${CustomButtonStyled} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  font-size: 14px;
  }
  
`;
const Price = styled.span`
  width: 90%;
  text-align: center;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
  font-size: 14px; 
  }
`;

export {
  CollectionItemContainer,
  Image,
  CustomButtonStyled,
  CollectionFooter,
  Name,
  Price
};
