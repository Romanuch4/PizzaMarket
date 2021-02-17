import { actionTypes } from '../reducers/pizzas';
import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    dispatch(updatePizzas(data.pizzas));
  });
};

export const updatePizzas = (items) => {
  return {
    type: actionTypes.UPDATE_PIZZAS,
    payload: {
      items: items,
    },
  };
};
