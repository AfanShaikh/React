import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import { Reducer as notificationReducer} from '../Redux/Reducer';

const root = combineReducers({
    notification: notificationReducer,
});

export const myStore = legacy_createStore(root,applyMiddleware(thunk))