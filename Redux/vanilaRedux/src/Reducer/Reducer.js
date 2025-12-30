import * as types from './Action';

const initialState = { count: 0 };


export const CounterReducer = (state =initialState, action) => {
    console.log('🚀 ~ action:', action);
    console.log('🚀 ~ state:', state);
    switch (action.type){
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
}