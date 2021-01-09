import React, {useEffect, useState} from 'react';

import { RouteComponentProps } from 'react-router-dom';

import {
  Page404Container,
  H1404Container,
  P404Container,
  Img404Container,
  Sub404Container,
} from './Page404.styles';

const GIPHY_API_KEY = 'Uzt3Uf7bsGLp7dGObRQNme4UZOJUIKar';

export const Page404 = (props: RouteComponentProps) => {
  const [imgObj, setImageObj] = useState<any | null>(null);

  useEffect(() => {
    const location = props.location.pathname.split('/');
    const query = [
      `q=${encodeURIComponent(location.join(' '))}`,
      `api_key=${GIPHY_API_KEY}`,
      `limit=1`, `rating=g`, `lang=en`,
    ];
    fetch('https://api.giphy.com/v1/gifs/search?' + query.join('&'), {
      cache: 'no-cache',
    }).then(async (data) => {
      const TARGET_HEIGHT = 200;
      const results = await data.json();
      if (!results.data.length) { return; }
      const values = Object.values(results.data[0].images).filter(
          (obj: any) => obj.height <= 250 && obj.height >= 150 && obj.url
        ).sort((a: any, b: any): number => {
          const heightA = Math.abs(a.height as number - TARGET_HEIGHT);
          const heightB = Math.abs(b.height as number - TARGET_HEIGHT);
          if (heightA < heightB) return -1;
          else if (heightA === heightB) return 0;
          else return 1;
        });

      setImageObj((values as any[])[0]);
    });
  }, [props.location.pathname]);

  return (
  <Page404Container>
    <H1404Container>404</H1404Container>
    <P404Container>Page {props.location.pathname} does not exist.</P404Container>
    {imgObj && (<Img404Container src={imgObj.url} alt='Giphy 404 animation'/>)}
    <Sub404Container>Powered by Giphy</Sub404Container>
  </Page404Container>
)
};