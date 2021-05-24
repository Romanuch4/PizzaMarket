import React from 'react';
import styled from 'styled-components';
import { MenuProps } from '../types/types';
import { MenuNav } from './menu-nav/menu-nav';

const MenuStyle = styled.div`
  width: 100%;
  max-width: 1225px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1400px) {
     {
      justify-content: center;
    }
  }
`;

export const Menu: React.FC<MenuProps> = React.memo(({ activeCategory, categories, changeActiveCategory }) => {
  return (
    <MenuStyle>
      <MenuNav
        activeCategory={activeCategory}
        categories={categories}
        changeActiveCategory={changeActiveCategory}
      />
    </MenuStyle>
  );
});
