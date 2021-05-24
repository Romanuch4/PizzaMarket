import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const BasketBottomStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BasketComeback = styled.a`
  display: block;
  min-width: 211px;
  padding: 18px 26px;
  border: 1px solid #d3d3d3;
  border-radius: 30px;
  background: #ffffff;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 16px;
  color: #cacaca;
  text-align: center;
  line-height: 1.1875;
  text-decoration: none;

  :hover {
    opacity: 0.7;
  }
`;

const BasketBuy = styled(BasketComeback)`
  background: #fe5f1e;
  color: #fff;
`;

export const BasketBottom: React.FC = React.memo(() => {
  return (
    <BasketBottomStyle>
      <BasketComeback to="/" as={NavLink}>
        Вернуться назад
      </BasketComeback>
      <BasketBuy to="/" as={NavLink}>
        Оплатить сейчас
      </BasketBuy>
    </BasketBottomStyle>
  );
});
