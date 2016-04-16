import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import createDevToolsWindow from '../../utils/create-dev-tools-window';
import App from '../../components/App';

const store = configureStore();

createDevToolsWindow(store);

export default () => (
  <Provider store={store} key="provider">
    <App />
  </Provider>
);
