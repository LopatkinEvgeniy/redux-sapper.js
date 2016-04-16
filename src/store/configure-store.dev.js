import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/dev-tools';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, loggerMiddleware),
      DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )
  );
  
  return store;
}
