import React from 'react';
import { HeaderContent } from './header-content/header-content';
import styled from 'styled-components';
import { HeaderLine } from './header-line/header-line';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 49px;

  @media screen and (max-width: 600px) {
     {
      padding-top: 20px;
    }
  }
`;

export const Header = React.memo(({ isBasket, itemsCount, totalPrice }) => {
  return (
    <>
      <HeaderStyle>
        <HeaderContent itemsCount={itemsCount} totalPrice={totalPrice} isBasket={isBasket} />
      </HeaderStyle>
      <HeaderLine />
    </>
  );
});
