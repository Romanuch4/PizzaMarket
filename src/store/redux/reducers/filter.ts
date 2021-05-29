import { FilterTypes } from "../actions/filter-ac";

export type CategoriesItemType = {
  id: number, 
  name: string,
} 

export type CaregoriesType = Array<CategoriesItemType>;

type InitialStateType = {
  activeCategory: number,
  categories: CaregoriesType,
}

const initialState: InitialStateType = {
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
};

export const filter = (state = initialState, action: FilterTypes): InitialStateType => {
  if (action.type === actionTypes.CHANGE_ACTIVE_CATEGORY) {
    return {
      ...state,
      activeCategory: action.activeCategory,
    };
  } else {
    return {
      ...state,
    };
  }
};
