const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

export const actionTypes = {
  SET_ITEMS: 'SET_ITEMS',
  SET_TOTAL_PRICE: 'SET_TOTAL_PRICE',
  SET_ITEMS_COUNT: 'SET_ITEMS_COUNT',
  DELETE_ITEMS: 'DELETE_ITEMS',
  DELETE_ITEM: 'DELETE_ITEM',
  DELETE_ITEM_PIZZA: 'DELETE_ITEM_PIZZA',
};

export const basket = (state = initialState, action) => {
  if (action.type === actionTypes.SET_ITEMS) {
    const newItems = {
      ...state.items,
      [action.payload.id]: !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload],
    };
    const allPizzas = [].concat.apply([], Object.values(newItems));
    return {
      ...state,
      items: newItems,
      itemsCount: allPizzas.length,
      totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
    };
  } else if (action.type === actionTypes.DELETE_ITEM) {
    const items = {
      ...state.items,
    };
    delete items[action.payload];
    const allPizzas = [].concat.apply([], Object.values(items));
    return {
      ...state,
      items,
      itemsCount: allPizzas.length,
      totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
    };
  } else if (action.type === actionTypes.DELETE_ITEMS) {
    return {
      ...state,
      items: {},
      totalPrice: 0,
      itemsCount: 0,
    };
  } else if (action.type === actionTypes.DELETE_ITEM_PIZZA) {
    const items = {
      ...state.items,
    };
    items[action.payload].pop();
    const allPizzas = [].concat.apply([], Object.values(items));
    return {
      ...state,
      items,
      itemsCount: allPizzas.length,
      totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
    };
  } else {
    return {
      ...state,
    };
  }
};