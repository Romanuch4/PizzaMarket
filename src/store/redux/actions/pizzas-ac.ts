import { actionTypes } from '../reducers/pizzas';
import axios from 'axios';
import { ElementType } from '../../../types/types';
import { GlobalStateType } from '../store';
import { ThunkAction } from 'redux-thunk';

type PizzasTypes = UpdatePizzasType;

type GetStateType = () => GlobalStateType;

export const fetchPizzas = (): 
ThunkAction<void, GetStateType, unknown, PizzasTypes> => (dispatch) => {
  axios.get('http://localhost:3000/db.json').then(({ data }) => {
    dispatch(updatePizzas(data.pizzas));
  });
};

type UpdatePizzasType = {
  type: typeof actionTypes.UPDATE_PIZZAS,
  payload: {
    items: Array<ElementType>,
  },
}

const updatePizzas = (items: Array<ElementType>): UpdatePizzasType => {
  return {
    type: actionTypes.UPDATE_PIZZAS,
    payload: {
      items: items,
    },
  };
};
