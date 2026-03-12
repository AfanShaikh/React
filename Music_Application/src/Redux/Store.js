import { applyMiddleware, compose, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

import { reducer as musicReducer } from "./Reducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = legacy_createStore(musicReducer, enhancer);