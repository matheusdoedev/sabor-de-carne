import React from 'react';

import Routes from './routes';

import Gaps from '../styles/settings/gaps';
import Reset from '../styles/generics/reset';
import Normalize from '../styles/generics/normalize';

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <Gaps />
      <Normalize />
      <Reset />

      <Routes />
    </>
  );
}
