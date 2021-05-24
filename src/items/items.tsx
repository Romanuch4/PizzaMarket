import React from 'react';
import { useDispatch } from 'react-redux';
import {ItemsProps} from '../types/types';
import styled from 'styled-components';
import { Item } from './item/item';

const ItemsStyle = styled.section`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1400px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

export const Items: React.FC<ItemsProps> = React.memo(({ pizzasItems, activeCategory, isLoaded, addPizzaToBasket }) => {
  const dispatch = useDispatch();
  return (
    <ItemsStyle>
      <Item
        pizzasItems={pizzasItems}
        activeCategory={activeCategory}
        isLoaded={isLoaded}
        addPizzaToBasket={addPizzaToBasket}
        dispatch={dispatch}
      />
    </ItemsStyle>
  );
});
