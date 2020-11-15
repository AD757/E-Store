import styled from "styled-components";

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${({ imgSrc }) => imgSrc};
`;

const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({ size }) => (size === "large" ? "480px" : "240px")};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: 6s cubic-bezier(0.025, 0.45, 0.45, 0.95);
    }

    &${ContentContainer} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Subtitle
};
