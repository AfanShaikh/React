import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';

import { thunk } from 'redux-thunk';
import { reducer as musicReducer } from './App/Reducer';
import { Reducer as authReducer } from './Auth/Reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  app: musicReducer,
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = legacy_createStore(rootReducer, enhancer);