import styled from "styled-components";
import StripeCheckoutButton from "../../components/StripeButton/StripeButton";

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
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
  font-size: 36px;
`;
const TestWarning = styled.div`
  text-align: center;
  margin-top: 80px;
  font-size: 24px;
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
