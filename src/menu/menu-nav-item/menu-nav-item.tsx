import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { CategoriesItemType } from '../../store/redux/reducers/filter';
import { MenuProps } from '../../types/types';

interface MenuNavItemProps {
  readonly activeItem: boolean;
};

const MenuNavItemStyle = styled.a<MenuNavItemProps>`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.015em;
  padding: 14.5px 35px 14.5px 35px;
  margin: 0 4px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.4s linear;
  text-decoration: none;

  :hover {
    background: #282828;
    color: #fff;
  }

  :focus {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1400px) {
     {
      padding: 10px 30px 10px 30px;
      margin-right: 6px;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 900px) {
     {
      margin: 10px;
    }
  }

  color: ${props => props.activeItem ? '#fff': '#2c2c2c'};
  background-color: ${props => props.activeItem ? '#282828': '#f9f9f9'};
`;

export const MenuNavItem: React.FC<MenuProps> = React.memo(({ categories, activeCategory, changeActiveCategory }) => {
  const dispatch = useDispatch();
  const onSelectedItem = (index: number) => {
    dispatch(changeActiveCategory(index));
  };
  const content = categories.map((elem: CategoriesItemType, index: number) => {
    return (
      <MenuNavItemStyle
        onClick={() => onSelectedItem(index)}
        activeItem={activeCategory === index ? true : false}
        key={elem.id}>
        {elem.name}
      </MenuNavItemStyle>
    );
  });

  return <>{content}</>;
});
