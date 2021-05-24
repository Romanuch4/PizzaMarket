import React from 'react';
import {HeaderMenuProps} from '../../types/types';
import shoppingCart from '../../assets/images/shopping-cart.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderMenuStyle = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  background-color: rgba(254, 95, 30, 1);
  padding: 0 23px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(50, 50, 50, 0.5);
  }
`;

const PriceStyle = styled.div`
  position: relative;
  padding-top: 2px;
  ::before {
    content: '';
    position: absolute;
    top: -3px;
    right: -13px;
    width: 1px;
    height: 25px;
    background: rgba(255, 255, 255, 0.25);
  }
`;

const CardStyle = styled.div`
  margin-left: 27px;
`;

const CardNumberStyle = styled.span`
  margin-left: 8px;
`;

const CardImgStyle = styled.img`
  position: relative;
  top: 3px;
`;

export const HeaderMenu: React.FC<HeaderMenuProps> = React.memo(({ totalPrice, itemsCount }) => {
  return (
    <HeaderMenuStyle as={NavLink} to="/basket">
      <PriceStyle>{totalPrice} ₽</PriceStyle>
      <CardStyle>
        <CardImgStyle src={shoppingCart} alt="card" />
        <CardNumberStyle>{itemsCount}</CardNumberStyle>
      </CardStyle>
    </HeaderMenuStyle>
  );
});
