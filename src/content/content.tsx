import React from 'react';
import { Header } from '../header/header';
import styled from 'styled-components';
import { Menu } from '../menu/menu';
import { MainTitle } from '../main-title/main-title';
import { Items } from '../items/items';
import { Route } from 'react-router-dom';
import { Basket } from '../basket/basket';
import {ContentProps, ItemsProps} from '../types/types';

const PizzaContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  flex-grow: 1;
`;



export const Content: React.FC<ContentProps & ItemsProps> = React.memo(
  ({
    pizzasItems,
    activeCategory,
    categories,
    isLoaded,
    changeActiveCategory,
    itemsCount,
    totalPrice,
    addPizzaToBasket,
    deletePizzaFromBasket,
    basketItems,
    deletePizzasFromBasket,
    deletePizzasItemFromBasket,
  }) => {
    return (
      <PizzaContent>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Header itemsCount={itemsCount} totalPrice={totalPrice} />
              <Menu
                categories={categories}
                activeCategory={activeCategory}
                changeActiveCategory={changeActiveCategory}
              />
              <MainTitle />
              <Items
                pizzasItems={pizzasItems}
                activeCategory={activeCategory}
                isLoaded={isLoaded}
                addPizzaToBasket={addPizzaToBasket}
              />
            </>
          )}
        />
        <Route
          path="/basket"
          exact
          render={() => (
            <Basket
              basketItems={basketItems}
              itemsCount={itemsCount}
              totalPrice={totalPrice}
              addPizzaToBasket={addPizzaToBasket}
              deletePizzaFromBasket={deletePizzaFromBasket}
              deletePizzasFromBasket={deletePizzasFromBasket}
              deletePizzasItemFromBasket={deletePizzasItemFromBasket}
            />
          )}
        />
      </PizzaContent>
    );
  },
);
