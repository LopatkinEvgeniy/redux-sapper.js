import React from 'react';
import { Field } from '../../containers';

export default () => (
  <div className="app">
    <header className="app__header">
      <h1 className="app__title">Sapper.js</h1>
    </header>
    <div className="app__content">
      <div className="app_controlls">
        <button className="button button_raised_blue">new</button>
      </div>

      <div className="app__field">
        <Field />
      </div>
    </div>
  </div>
);
