import { AnyAction, Dispatch } from "redux";
import { AddPizzaToBasketType, DeletePizzaFromBasketType, DeletePizzasFromBasketType, DeletePizzasItemFromBasketType } from "../store/redux/actions/basket-ac";
import { ChangeActiveCategoryType } from "../store/redux/actions/filter-ac";
import { ItemsType, ItemType } from "../store/redux/reducers/basket";
import { CaregoriesType, CategoriesItemType } from "../store/redux/reducers/filter";

export interface BasketItemProps  {
  basketItems: ItemsType,
  deletePizzasItemFromBasket: (id: number) => DeletePizzasItemFromBasketType,
  addPizzaToBasket: (elem: ElementType) => AddPizzaToBasketType,
  deletePizzaFromBasket: (id: number) => DeletePizzaFromBasketType,
  dispatch?: Dispatch<AnyAction>,
}

export interface BasketFullProps extends BasketItemProps {
  itemsCount: number,
  totalPrice: number,
  deletePizzasFromBasket: () => DeletePizzasFromBasketType,
}

export interface BasketProps extends BasketFullProps {
  isBasket?: boolean,
}

export interface ElementType  {
  id: number,
  title: string,
  price: number,
  imgSrc: string,
  size: string | undefined,
  type: string | undefined ,
  count?: number | undefined,
}

export interface BasketInfoProps {
  itemsCount: number,
  totalPrice: number,
}

export interface BasketHeaderProps {
  deletePizzasFromBasket: () => DeletePizzasFromBasketType,
  dispatch: Dispatch<AnyAction>,
}

export interface HeaderMenuProps {
  itemsCount: number,
  totalPrice: number,
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
  activeCategory: number,
  categories: CaregoriesType,
  isLoaded: boolean,
  changeActiveCategory: (activeCategory: number) => ChangeActiveCategoryType,
  itemsCount: number,
  totalPrice: number,
  addPizzaToBasket: (item: ItemType) => AddPizzaToBasketType,
  deletePizzaFromBasket: (id: number) => DeletePizzaFromBasketType,
  basketItems: ItemsType,
  deletePizzasFromBasket: () => DeletePizzasFromBasketType,
  deletePizzasItemFromBasket: (id: number) => DeletePizzasItemFromBasketType,
}

export interface ItemsProps {
  pizzasItems: Array<PizzasItemType>,
  activeCategory: number,
  isLoaded: boolean,
  addPizzaToBasket: (item: ItemType) => AddPizzaToBasketType,
  dispatch?: Dispatch<AnyAction>,
}

export interface MenuProps {
  categories: Array<CategoriesItemType>, 
  activeCategory: number, 
  changeActiveCategory: (activeCategory: number) => ChangeActiveCategoryType,
}