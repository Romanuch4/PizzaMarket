import React from 'react';
import { BasketItemProps, ElementType } from "../../../types/types";
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #f4f4f4;
`;

const ItemImgWrapper = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ItemInfo = styled.div`
  width: 100%;
  max-width: 280px;
  margin-left: 15px;
  margin-right: 68px;
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  line-height: 1.2272727;
  letter-spacing: 0.01em;
  h3 {
    margin-bottom: 3px;
    font-weight: bold;
    font-size: 22px;
    color: #000000;
  }

  h4 {
    font-weight: normal;
    font-size: 18px;
    color: #8d8d8d;
    line-height: 1.2222;
    letter-spacing: 0.01em;
  }
`;

const ItemCount = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: 'Proxima Nova', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    color: #000000;
    line-height: 1.22727;
    letter-spacing: 0.01em;
  }
`;

const ItemReduce = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 12px;
  border: 2px solid #fe5f1e;
  border-radius: 50%;

  ::before {
    content: '';
    width: 9.6px;
    height: 1.92px;
    background: #fe5f1e;
  }

  :hover {
    cursor: pointer;
    filter: hue-rotate(180deg);
  }
`;

const ItemAdd = styled(ItemReduce)`
  ::after {
    position: absolute;
    left: 50%;
    top: 50%;
    content: '';
    width: 10px;
    height: 2px;
    background: #fe5f1e;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const ItemPrice = styled.div`
  flex-shrink: 0;
  width: 245px;
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #000000;
  text-align: center;
  line-height: 1.22727;
  letter-spacing: 0.01em;
`;

const ItemDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid #d0d0d0;
  font-size: 24px;
  color: #d0d0d0;
  transform: rotate(45deg);

  :hover {
    cursor: pointer;
    background-color: #d0d0d0;
    color: #fff;
  }
`;

export const BasketItem: React.FC<BasketItemProps> = React.memo(
  ({
    basketItems,
    deletePizzasItemFromBasket,
    addPizzaToBasket,
    deletePizzaFromBasket,
    dispatch,
  }) => {
    const data = [];
    for (let key in basketItems) {
      const item = {
        ...basketItems[key][0],
        count: basketItems[key].length,
      };
      data.push(item);
    }
    const deleteItem = (id: number) => {
      dispatch?(deletePizzasItemFromBasket(id)): console.log(dispatch);
    };

    const addItemElem = (elem: ElementType) => {
      dispatch?(addPizzaToBasket(elem)): console.log(dispatch);
    };

    const reduceItemElem = (elem: ElementType) => {
      if (elem.count && elem.count <= 1) {
        deleteItem(elem.id);
      } else {
        dispatch?(deletePizzaFromBasket(elem.id)): console.log(dispatch);
      }
    };
    const items = data.map((elem) => {
      return (
        <Item key={elem.id + Math.random() * 10}>
          <ItemImgWrapper>
            <img src={elem.imgSrc} alt={elem.title} />
          </ItemImgWrapper>
          <ItemInfo>
            <h3>{elem.title}</h3>
            <h4>{`${elem.type} тесто, ${elem.size}`}</h4>
          </ItemInfo>
          <ItemCount>
            <ItemReduce onClick={() => reduceItemElem(elem)} tabIndex={0} />
            <span>{elem.count}</span>
            <ItemAdd onClick={() => addItemElem(elem)} tabIndex={0} />
          </ItemCount>
          <ItemPrice>{`${Number(elem.price) * elem.count} ₽`}</ItemPrice>
          <ItemDelete onClick={() => deleteItem(elem.id)} tabIndex={0}>
            +
          </ItemDelete>
        </Item>
      );
    });
    return <>{items}</>;
  },
);
