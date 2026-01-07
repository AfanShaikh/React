import { legacy_createStore } from 'redux';
import { todoReducer  } from '../Reducer/Todos/Reducer';
// import { myOwnReducer } from '../Reducer/Counts/Reducer';

// export const myOwnStore = legacy_createStore(myOwnReducer);


export const myOwnStore = legacy_createStore( todoReducer );