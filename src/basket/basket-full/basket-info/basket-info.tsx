import React from 'react';
import {BasketInfoProps} from '../../../types/types';
import styled from 'styled-components';

const BasketInfoStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const TotalPizza = styled.div`
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #000000;
  line-height: 1.22727;
  letter-spacing: 0.01em;

  span {
    font-weight: 700;
  }
`;

const TotalPrice = styled(TotalPizza)`
  span {
    color: #fe5f1e;
  }
`;

export const BasketInfo: React.FC<BasketInfoProps> = React.memo(({ totalPrice, itemsCount }) => {
  return (
    <BasketInfoStyle>
      <TotalPizza>
        Всего пицц: <span>{itemsCount} шт.</span>
      </TotalPizza>
      <TotalPrice>
        Сумма заказа:
        <span>{` ${totalPrice} ₽`}</span>
      </TotalPrice>
    </BasketInfoStyle>
  );
});
