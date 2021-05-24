import React from 'react';
import {HeaderProps} from '../../types/types';
import styled from 'styled-components';
import { HeaderLogo } from '../header-logo/header-logo';
import { HeaderMenu } from '../header-menu/header-menu';

const HeaderContentStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1225px;
  margin: 0 auto;
  padding: 0 15px;

  @media screen and (max-width: 600px) {
     {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const HeaderContent: React.FC<HeaderProps> = React.memo(({ isBasket, itemsCount, totalPrice }) => {
  return (
    <HeaderContentStyle>
      <HeaderLogo />
      {!isBasket ? <HeaderMenu itemsCount={itemsCount} totalPrice={totalPrice} /> : null}
    </HeaderContentStyle>
  );
});
