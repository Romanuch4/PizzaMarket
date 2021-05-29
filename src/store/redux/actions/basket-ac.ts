import { actionTypes, ItemType } from '../reducers/basket';

export type BasketTypes = AddPizzaToBasketType & DeletePizzaFromBasketType & DeletePizzasFromBasketType & DeletePizzasItemFromBasketType;

export type AddPizzaToBasketType = {
  type: typeof actionTypes.SET_ITEMS,
  payload: ItemType
}

export const addPizzaToBasket = (item: ItemType): AddPizzaToBasketType => {
  return {
    type: actionTypes.SET_ITEMS,
    payload: item,
  };
};

export type DeletePizzaFromBasketType = {
  type: typeof actionTypes.DELETE_ITEM_PIZZA,
  payload: number
}

export const deletePizzaFromBasket = (id: number): DeletePizzaFromBasketType => {
  return {
    type: actionTypes.DELETE_ITEM_PIZZA,
    payload: id,
  };
};

export type DeletePizzasFromBasketType = {
  type: typeof actionTypes.DELETE_ITEMS,
}

export const deletePizzasFromBasket = (): DeletePizzasFromBasketType => {
  return {
    type: actionTypes.DELETE_ITEMS,
  };
};

export type DeletePizzasItemFromBasketType = {
  type: typeof actionTypes.DELETE_ITEM,
  payload: number,
}

export const deletePizzasItemFromBasket = (item: number): DeletePizzasItemFromBasketType => {  
  return {
    type: actionTypes.DELETE_ITEM,
    payload: item,
  };
};
