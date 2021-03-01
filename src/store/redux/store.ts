import { createStore, combineReducers, applyMiddleware } from 'redux';
import { filter } from './reducers/filter';
import { pizzas } from './reducers/pizzas';
import { basket } from './reducers/basket';
import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({ filter, pizzas, basket });

type RootReducerType = typeof rootReducer;
export type GlobalStateType = ReturnType<RootReducerType>;

const Store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
