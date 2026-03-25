import * as types from './Action';

const initialVal = [];

export const Reducer = (state = initialVal ,{ type, payload}) =>{
    switch(type){
        case types.ADD_NOTIFICATION:
            return [...state, payload];

        case types.REMOVE_NOTIFICATION:
            return state.filter((el) => el.id !== payload.id);

        default:
            return state;
    }
};