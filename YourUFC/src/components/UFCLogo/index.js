import React from 'react';
import styled from 'styled-components/native';
import ufcLogo from './ufc_logo.png';

const Logo = styled.Image`
  width: 300px;
  height: 150px;
  margin-bottom: 50px;
`;

const UFCLogo = () => {
  return <Logo source={ufcLogo} resizeMode="contain" />;
};

export default UFCLogo;
