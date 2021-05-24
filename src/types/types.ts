import { CategoriesItemType } from "../store/redux/reducers/filter";

export interface BasketItemProps  {
  basketItems: any,
  deletePizzasItemFromBasket: any,
  addPizzaToBasket: any,
  deletePizzaFromBasket: any,
  dispatch?: any,
}

export interface BasketFullProps extends BasketItemProps {
  itemsCount: any,
  totalPrice: any,
  deletePizzasFromBasket: any,
}

export interface BasketProps extends BasketFullProps {
  isBasket?: boolean,
}

export interface Element  {
  id: number,
  title: string,
  price: number,
  imgSrc: string,
  size: string,
  type: string,
  count?: number | undefined,
}

export interface BasketInfoProps {
  itemsCount: any,
  totalPrice: any,
}

export interface BasketHeaderProps {
  deletePizzasFromBasket: any,
  dispatch: any,
}

export interface HeaderMenuProps {
  itemsCount: any, 
  totalPrice: any,
}

export interface HeaderProps extends HeaderMenuProps {
  isBasket?: boolean, 
}

export interface PizzasItemType {
  id: number,
  name: string,
  title?: string,
  types: Array<number>,
  sizes: Array<number>,
  price: number,
  imageUrl: string,
  category: number,
  rating: number,
  size?: string,
  type?: string,
}

export interface ContentProps {
  pizzasItems: Array<PizzasItemType>,
  activeCategory: any,
  categories: any,
  isLoaded: any,
  changeActiveCategory: any,
  itemsCount: any,
  totalPrice: any,
  addPizzaToBasket: any,
  deletePizzaFromBasket: any,
  basketItems: any,
  deletePizzasFromBasket: any,
  deletePizzasItemFromBasket: any,
}

export interface ItemsProps {
  pizzasItems: any,
  activeCategory: any,
  isLoaded: any,
  addPizzaToBasket: any,
  dispatch?: any,
}

export interface MenuProps {
  categories: Array<CategoriesItemType>, 
  activeCategory: any, 
  changeActiveCategory: any,
}