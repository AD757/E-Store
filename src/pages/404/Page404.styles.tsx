import styled, {css} from 'styled-components';

export const Page404Container = styled.div`
  width: 100vw;
  height: 100%;
  @media screen and (max-width: 800px) {
    width: 80vw;
    height: 80%;
  }
`;

const commonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const H1404Container = styled.h1`
  font-size: 72px;
  margin-top: 20vh;
  ${commonStyles}
`;

export const P404Container = styled.p`
  font-size: 24px;
  ${commonStyles}
`;

export const Img404Container = styled.img`
  margin: 20px auto auto;
  height: 200px;
  width: auto;
  display: flex;
  ${commonStyles}
`;

export const Sub404Container = styled.sub`
  ${commonStyles}
`;
