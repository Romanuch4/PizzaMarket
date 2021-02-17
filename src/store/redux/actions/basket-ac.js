import { actionTypes } from '../reducers/basket';
export const addPizzaToBasket = (item) => {
  return {
    type: actionTypes.SET_ITEMS,
    payload: item,
  };
};

export const deletePizzaFromBasket = (id) => {
  return {
    type: actionTypes.DELETE_ITEM_PIZZA,
    payload: id,
  };
};

export const deletePizzasFromBasket = () => {
  return {
    type: actionTypes.DELETE_ITEMS,
  };
};

export const deletePizzasItemFromBasket = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    payload: item,
  };
};
