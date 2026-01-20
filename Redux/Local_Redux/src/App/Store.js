// import { legacy_createStore } from 'redux';
// import { todoReducer  } from '../Reducer/Todos/Reducer';
// // import { myOwnReducer } from '../Reducer/Counts/Reducer';

// // export const myOwnStore = legacy_createStore(myOwnReducer);


// export const myOwnStore = legacy_createStore( todoReducer );
// import {combineReducers, legacy_createStore} from "redux"
// import {myOwnReducer} from "../Reducer/Counts/Reducer"
// import {todoReducer} from '../Reducer/Todos/Reducer'
// import{authReducer} from "../Reducer/Auth/Reducer"


// const terminalReducer = combineReducers({
//     todos: todoReducer,
//     Counts: myOwnReducer,
//     auths: authReducer,

// })

// export const myOwnStore = legacy_createStore(
//     terminalReducer,
//     window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
// );


import {combineReducers, legacy_createStore , applyMiddleware, compose} from "redux"
import {myOwnReducer} from "../Reducer/Counts/Reducer"
import {todoReducer} from '../Reducer/Todos/Reducer'
import{authReducer} from "../Reducer/Auth/Reducer"


const terminalReducer = combineReducers({
    todos: todoReducer,
    Counts: myOwnReducer,
    auths: authReducer,

})


const logger = (store) => (next) => (action) =>{
    return typeof action === 'function' ? action(store.dispatch, store.getStore) : next(action);
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhance = composeEnhancers(applyMiddleware(logger));

export const myOwnStore = legacy_createStore(
    terminalReducer, enhance
);