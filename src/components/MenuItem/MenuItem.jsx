import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle
} from "./MenuItem.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const image = `url(${imageUrl})`;

  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imgSrc={image} />
      <ContentContainer>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
