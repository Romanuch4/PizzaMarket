import React from 'react';
import { MenuNavItem } from '../menu-nav-item/menu-nav-item';
import styled from 'styled-components';
import { MenuProps } from '../../types/types';

const MenuNavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 900px) {
     {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media screen and (max-width: 400px) {
     {
      flex-direction: column;
    }
  }
`;

export const MenuNav: React.FC<MenuProps> = React.memo(({ activeCategory, categories, changeActiveCategory }) => {
  return (
    <MenuNavStyle>
      <MenuNavItem
        activeCategory={activeCategory}
        categories={categories}
        changeActiveCategory={changeActiveCategory}
      />
    </MenuNavStyle>
  );
});
