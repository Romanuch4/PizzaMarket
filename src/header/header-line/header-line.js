import React from 'react';
import styled from 'styled-components';

const HeaderLineStyle = styled.div`
  margin: 40px auto;
  height: 1px;
  width: auto;
  background-color: #f6f6f6;
  width: 99.67%;
  max-width: 1225px;

  @media screen and (max-width: 600px) {
    margin: 10px auto;
  }
`;

export const HeaderLine = React.memo(() => {
  return <HeaderLineStyle />;
});
