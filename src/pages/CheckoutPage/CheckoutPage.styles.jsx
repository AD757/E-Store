import styled from "styled-components";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

const CheckoutPageContainer = styled.div`
  width: 65%;
  min-height: 70vh;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 90%;

  }
`;

const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  
`;

const HeaderBlock = styled.div`
 font-size: 16px;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

const StripeCheckoutButtonStyled = styled(StripeCheckoutButton)`
  margin-left: auto;
  margin-top: 50px;
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 24px;

`;
const TestWarning = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  font-weight: bolder;
  color: red;

`;

export {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  StripeCheckoutButtonStyled,
  Total,
  TestWarning
};
