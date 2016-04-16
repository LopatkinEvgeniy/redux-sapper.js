import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configure-store';
import createDevToolsWindow from '../../utils/create-dev-tools-window';
import App from '../app';

const store = configureStore();

createDevToolsWindow(store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <App />
      </Provider>
    );
  }
}
