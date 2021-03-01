import { actionTypes } from '../reducers/basket';
type AddPizzaToBasketType = {
  type: typeof actionTypes.SET_ITEMS,
  payload: Object
}

export const addPizzaToBasket = (item: Object): AddPizzaToBasketType => {
  return {
    type: actionTypes.SET_ITEMS,
    payload: item,
  };
};

type DeletePizzaFromBasketType = {
  type: typeof actionTypes.DELETE_ITEM_PIZZA,
  payload: number
}

export const deletePizzaFromBasket = (id: number): DeletePizzaFromBasketType => {
  return {
    type: actionTypes.DELETE_ITEM_PIZZA,
    payload: id,
  };
};

type DeletePizzasFromBasketType = {
  type: typeof actionTypes.DELETE_ITEMS
}

export const deletePizzasFromBasket = (): DeletePizzasFromBasketType => {
  return {
    type: actionTypes.DELETE_ITEMS,
  };
};

type DeletePizzasItemFromBasketType = {
  type: typeof actionTypes.DELETE_ITEM,
  payload: number,
}

export const deletePizzasItemFromBasket = (item: number): DeletePizzasItemFromBasketType => {  
  return {
    type: actionTypes.DELETE_ITEM,
    payload: item,
  };
};
