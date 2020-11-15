import styled, { css } from "styled-components";

const columnWidth = css`
  width: 23%;
`;

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Name = styled.span`
  ${columnWidth}
`;

const Quantity = styled.span`
  ${columnWidth}
  display: flex;
`;

const Price = styled.span`
  ${columnWidth}
`;

const Arrow = styled.div`
  cursor: pointer;
`;

const Value = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

export {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton
};
