import * as types from '../Reducer/Action'
import { legacy_createStore } from 'redux';


import { CounterReducer } from '../Reducer/Reducer';

export const myStore = legacy_createStore(CounterReducer);

const newInitialState = { count: 10 };

const newReducer = (state = newInitialState, action) =>{
    switch(action.type) {
        case types.DOUBLE:
            return {
                ...state,
                count: state.count + 1,
            };
        case types.INCREMENT:
            return{
                ...state,
                 count: state.count +1,
            };

        case types.DECREMENT:
            return{
                ...state,
                 count: state.count - 1,
            };



        default:
            return state;
    }
};

setTimeout(() => {
    console.log('This is the Invocation of My NewReducer')
    myStore.replaceReducer(newReducer);
    myStore.dispatch({type: types.DOUBLE});
    console.log('Reducer Updated With Double')
},10000)