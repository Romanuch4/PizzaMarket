import React from 'react';
import { NavLink } from 'react-router-dom';
import logotype from '../../assets/images/logotype.svg';
import styled from 'styled-components';

const HeaderLogoStyle = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 600px) {
    margin-right: 0px;
  }

  @media screen and (max-width: 400px) {
    img {
      width: 250px;
    }
  }
`;

export const HeaderLogo = React.memo(() => {
  return (
    <HeaderLogoStyle as={NavLink} to="/">
      <img src={logotype} alt="logotype" />
    </HeaderLogoStyle>
  );
});
