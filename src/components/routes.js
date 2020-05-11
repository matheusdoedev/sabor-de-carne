import React from 'react';
import { Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Home from './pages/Home/index';

const history = createMemoryHistory();

export default function Routes() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router history={history}>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
