import React from 'react';
import styled from 'styled-components';
import { Header } from '../header/header';
import { BasketEmpty } from './basket-empty/basket-empty';
import { BasketFull } from './basket-full/basket-full';
const isBasket = true;

const BasketContentWrapper = styled.section`
  width: 100%;
  min-height: calc(100vh - 265px);
`;

const BasketContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1020px;
  height: 100%;
  margin: 0 auto;
  padding: 15px;
`;

export const Basket = React.memo(
  ({
    basketItems,
    itemsCount,
    totalPrice,
    deletePizzasFromBasket,
    deletePizzasItemFromBasket,
    addPizzaToBasket,
    deletePizzaFromBasket,
  }) => {
    return (
      <>
        <Header isBasket={isBasket} />
        <BasketContentWrapper>
          <BasketContent>
            {Object.keys(basketItems).length === 0 && basketItems.constructor === Object ? (
              <BasketEmpty />
            ) : (
              <BasketFull
                itemsCount={itemsCount}
                totalPrice={totalPrice}
                basketItems={basketItems}
                deletePizzasFromBasket={deletePizzasFromBasket}
                addPizzaToBasket={addPizzaToBasket}
                deletePizzaFromBasket={deletePizzaFromBasket}
                deletePizzasItemFromBasket={deletePizzasItemFromBasket}
              />
            )}
          </BasketContent>
        </BasketContentWrapper>
      </>
    );
  },
);
