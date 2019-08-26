import React from 'react';
import { Header } from './Header';
import { GlobalStyle } from './globalStyles';
import { ContainerV } from './Container';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContainerV />
    </>
  );
};

export default App;
