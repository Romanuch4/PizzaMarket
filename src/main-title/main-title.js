import React from 'react';
import styled from 'styled-components';

const MainTitleStyle = styled.h1`
  width: 100%;
  max-width: 1225px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 32px;
  margin-bottom: 35px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  line-height: 1.21875;
  letter-spacing: 0.01em;

  @media screen and (max-width: 1200px) {
    text-align: center;
  }

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
`;

export const MainTitle = React.memo(() => {
  return <MainTitleStyle>Все пиццы</MainTitleStyle>;
});
