import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import async from 'middlewares/async';
import storeValidator from 'middlewares/storeValidator';
import reducers from 'reducers';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, storeValidator),
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
