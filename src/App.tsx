import React from 'react';
import { Content } from './content/content.js';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveCategory } from './store/redux/actions/filter-ac';
import { fetchPizzas } from './store/redux/actions/pizzas-ac';
import {
  addPizzaToBasket,
  deletePizzaFromBasket,
  deletePizzasFromBasket,
  deletePizzasItemFromBasket,
} from './store/redux/actions/basket-ac';
import { Dispatch } from 'redux';
import { GlobalStateType } from './store/redux/store.js';

const Pizza = styled.div`
  background-color: #ffdf8c;
  padding: 40px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    padding: 30px;
  }

  @media screen and (max-width: 600px) {
    padding: 15px;
  }
`;

type PropsType = {
  categories: any,
  activeCategory: any,
  pizzasItems: any,
  isLoaded: boolean,
  totalPrice: number,
  itemsCount: number,
  basketItems: any,
  changeActiveCategory: Dispatch,
  deletePizzaFromBasket: Dispatch,
  addPizzaToBasket: Dispatch,
  deletePizzasFromBasket: Dispatch,
  deletePizzasItemFromBasket: Dispatch
}

/* declare namespace JSX {
  interface IntrinsicElements {
    categories: any,
  activeCategory: any,
  pizzasItems: any,
  isLoaded: boolean,
  totalPrice: number,
  itemsCount: number,
  basketItems: any,
  }
}
 */

export const App: React.FC = React.memo(() => {
  const dispatch: Dispatch = useDispatch();
  const state = useSelector((state: GlobalStateType) => {
    return {
      pizzas: state.pizzas.items,
      activeCategory: state.filter.activeCategory,
      categories: state.filter.categories,
      isLoaded: state.pizzas.isLoaded,
      totalPrice: state.basket.totalPrice,
      itemsCount: state.basket.itemsCount,
      basketItems: state.basket.items,
    };
  });

  React.useEffect(() => {
    //@ts-ignore
    dispatch(fetchPizzas());
  }, [dispatch]);

  type ParentState = {
    categories: any,
    activeCategory: any,
    pizzasItems: any,
    isLoaded: boolean,
    totalPrice: number,
    itemsCount: number,
    basketItems: any,
  }

  return (
    <>
      <Pizza>
        <Content
          categories={state.categories}
          activeCategory={state.activeCategory}
          pizzasItems={state.pizzas}
          isLoaded={state.isLoaded}
          totalPrice={state.totalPrice}
          itemsCount={state.itemsCount}
          basketItems={state.basketItems}
          changeActiveCategory={changeActiveCategory}
          deletePizzaFromBasket={deletePizzaFromBasket}
          addPizzaToBasket={addPizzaToBasket}
          deletePizzasFromBasket={deletePizzasFromBasket}
          deletePizzasItemFromBasket={deletePizzasItemFromBasket}
        />
      </Pizza>
    </>
  );
});
