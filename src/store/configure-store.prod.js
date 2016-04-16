import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,

    applyMiddleware(thunkMiddleware)
  );
}
