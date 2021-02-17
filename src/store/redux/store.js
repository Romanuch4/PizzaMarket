import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filter } from './reducers/filter';
import { pizzas } from './reducers/pizzas';
import { basket } from './reducers/basket';
import ReduxThunk from 'redux-thunk';

const Store = createStore(combineReducers({ filter, pizzas, basket }), applyMiddleware(ReduxThunk));

window.store = Store;

export default Store;
