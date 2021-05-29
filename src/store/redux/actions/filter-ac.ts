import { actionTypes } from '../reducers/filter';

export type FilterTypes = ChangeActiveCategoryType;

export type ChangeActiveCategoryType = {
  type: typeof actionTypes.CHANGE_ACTIVE_CATEGORY,
  activeCategory: number,
}

export const changeActiveCategory = (activeCategory: number): ChangeActiveCategoryType => {
  return {
    type: actionTypes.CHANGE_ACTIVE_CATEGORY,
    activeCategory,
  };
};
