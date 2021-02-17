const initialState = {
  items: [],
  isLoaded: false,
};

export const actionTypes = {
  UPDATE_PIZZAS: 'UPDATE_PIZZAS',
};

export const pizzas = (state = initialState, action) => {
  if (action.type === actionTypes.UPDATE_PIZZAS) {
    return {
      ...state,
      items: action.payload.items,
      isLoaded: true,
    };
  } else {
    return {
      ...state,
    };
  }
};
