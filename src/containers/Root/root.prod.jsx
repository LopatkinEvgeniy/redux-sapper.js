import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import App from '../../components/App';

const store = configureStore();

export default () => (
  <Provider store={store} key="provider">
    <App />
  </Provider>
);
