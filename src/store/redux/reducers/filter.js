const initialState = {
  categories: [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ],
  activeCategory: 0,
};

export const actionTypes = {
  CHANGE_ACTIVE_CATEGORY: 'CHANGE_ACTIVE_CATEGORY',
  CHANGE_SORT_BY: 'CHANGE_SORT_BY',
};

export const filter = (state = initialState, action) => {
  if (action.type === actionTypes.CHANGE_ACTIVE_CATEGORY) {
    return {
      ...state,
      activeCategory: action.activeCategory,
    };
  } else if (action.type === actionTypes.CHANGE_SORT_BY) {
    return {
      ...state,
      sortBy: action.sortBy,
    };
  } else {
    return {
      ...state,
    };
  }
};
