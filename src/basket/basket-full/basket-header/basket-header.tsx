import React from 'react';
import {BasketHeaderProps} from '../../../types/types';
import styled from 'styled-components';
import titleIcon from '../../../assets/images/basket-icon.svg';
import trashboxIcon from '../../../assets/images/trashbox-icon.svg';

const BasketHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const BasketTitleStyle = styled.h1`
  font-family: 'Proxima Nova', sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #000000;
  line-height: 1.21875;
  letter-spacing: 0.01em;

  span {
    margin-left: 17px;
  }
`;

const BasketTrashBoxStyle = styled.button`
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  color: #b6b6b6;
  line-height: 1.1875;
  text-decoration: none;

  :hover {
    opacity: 0.7;
    cursor: pointer;
  }

  span {
    margin-left: 7px;
  }
`;

export const BasketHeader: React.FC<BasketHeaderProps> = React.memo(({ deletePizzasFromBasket, dispatch }) => {
  const deletePizzas = () => {
    dispatch(deletePizzasFromBasket());
  };
  return (
    <>
      <BasketHeaderStyle>
        <BasketTitleStyle>
          <img src={titleIcon} alt="basket title" />
          <span>Корзина</span>
        </BasketTitleStyle>

        <BasketTrashBoxStyle onClick={deletePizzas}>
          <img src={trashboxIcon} alt="Очистить корзину" />
          <span>Очистить корзину</span>
        </BasketTrashBoxStyle>
      </BasketHeaderStyle>
    </>
  );
});
