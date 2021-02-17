import { actionTypes } from '../reducers/filter';

export const changeActiveCategory = (activeCategory) => {
  return {
    type: actionTypes.CHANGE_ACTIVE_CATEGORY,
    activeCategory,
  };
};

export const changeSortBy = (index) => {
  return {
    type: actionTypes.CHANGE_SORT_BY,
    sortBy: index,
  };
};
