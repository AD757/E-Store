import styled from 'styled-components';


export const CheckoutPageContainer = styled.div`
  width: 90vh;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    width: 55vh;
    display: flex;
    font-size: 12px;
  }
  
`;

export const CheckoutHeaderContainer = styled.div`
  width: 90vh;
  padding: 10px 0;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    width: 55vh;
    display: flex;
    font-size: 12px;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 22px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const TestWarningContainer = styled.div`
  margin-top: 40px;
  font-size: 22px;
  text-align: center;
  color: red;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
  }
`;
