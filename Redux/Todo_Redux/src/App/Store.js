// export const initialValue = {
//     items:[],
//     isLoading: false,
//     isError: null,
// };


import { legacy_createStore } from 'redux';

import { reducer } from '../Reducer/Reducer';

export const myOwnStore = legacy_createStore(reducer);