import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import App from '../app';

const store = configureStore();

export default () => (
  <Provider store={store} key="provider">
    <App />
  </Provider>
);
