import React from 'react';
import { BasketHeader } from './basket-header/basket-header';
import { BasketItem } from './basket-item/basket-item';
import { BasketInfo } from './basket-info/basket-info';
import { BasketBottom } from './basket-bottom/basket-bottom';
import { useDispatch } from 'react-redux';

export const BasketFull = React.memo(
  ({
    basketItems,
    itemsCount,
    totalPrice,
    deletePizzasFromBasket,
    deletePizzasItemFromBasket,
    addPizzaToBasket,
    deletePizzaFromBasket,
  }) => {
    const dispatch = useDispatch();
    return (
      <>
        <BasketHeader deletePizzasFromBasket={deletePizzasFromBasket} dispatch={dispatch} />
        <BasketItem
          addPizzaToBasket={addPizzaToBasket}
          deletePizzaFromBasket={deletePizzaFromBasket}
          basketItems={basketItems}
          dispatch={dispatch}
          deletePizzasItemFromBasket={deletePizzasItemFromBasket}
        />
        <BasketInfo itemsCount={itemsCount} totalPrice={totalPrice} />
        <BasketBottom />
      </>
    );
  },
);
