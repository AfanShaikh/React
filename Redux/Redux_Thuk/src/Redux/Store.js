import { legacy_createStore } from 'redux';

import { todoReducer } from './Reducer';

export const myStore = legacy_createStore(todoReducer);

