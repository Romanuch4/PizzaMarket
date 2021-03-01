import { actionTypes } from '../reducers/pizzas';
import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';

export const fetchPizzas = () => (dispatch: Dispatch<AnyAction>) => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    dispatch(updatePizzas(data.pizzas));
  });
};

type UpdatePizzasType = {
  type: typeof actionTypes.UPDATE_PIZZAS,
  payload: {
    items: Array<any>,
  },
}

export const updatePizzas = (items: Array<any>): UpdatePizzasType => {
  return {
    type: actionTypes.UPDATE_PIZZAS,
    payload: {
      items: items,
    },
  };
};
