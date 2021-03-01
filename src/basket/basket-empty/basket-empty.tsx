import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../assets/images/basket-empty.png';

const BasketEmptyBlock = styled.section`
  text-align: center;
  img {
    height: 200px;
  }
`;

const Title = styled.h1`
  margin-top: -20px;
  margin-bottom: 10px;
  font-family: 'Proxima Nova', sans-serif;
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  line-height: 1.21875;
  letter-spacing: 0.01em;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  margin-bottom: 30px;
  font-family: 'Proxima Nova', sans-serif;
  font-size: 18px;
  line-height: 145.4%;
  text-align: center;
  letter-spacing: 0.01em;
  color: #777777;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justidy-content: center;
`;

const Link = styled.a`
  display: block;
  margin: 54px auto 30px auto;
  padding: 14.5px 42px;
  border-radius: 30px;
  border: 1.5px solid #282828;
  background: #282828;
  font-family: 'Proxima Nova', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  line-height: 1.1875;
  text-align: center;
  letter-spacing: 0.015em;
  text-decoration: none;

  :hover {
    color: #282828;
    background-color: #fff;
  }

  @media screen and (max-width: 600px) {
    padding: 10px 36px;
    font-size: 14px;
  }
`;

export const BasketEmpty = React.memo(() => {
  return (
    <BasketEmptyBlock>
      <Title>
        Корзина пустая{' '}
        <span aria-label={'недоумение'} role="img">
          😕
        </span>
      </Title>
      <Description>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </Description>
      <img src={img} alt="Корзина пустая" />
      <LinkWrapper>
        <Link as={NavLink} to="/">
          Вернуться назад
        </Link>
      </LinkWrapper>
    </BasketEmptyBlock>
  );
});
