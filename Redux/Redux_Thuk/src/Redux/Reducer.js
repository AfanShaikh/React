import * as types from './ActionTypes';

const initialState = {
    todos: [],
    isLoading: false,
    isError: null,
};

export const todoReducer = (oldState= initialState, action ) =>{
    const { type, payload} = action;
    switch(type) {
        case types.GET_TODOS_REQUEST:
           return {
                ...oldState,
                isLoading: true,
            }

        case types.GET_TODOS_SUCCESS:
            return {
                ...oldState,
                isLoading: false,
                todos: [...oldState.todos, payload],
            }

        case types.GET_TODOS_FAILURE:
            return{
                ...oldState,
                isLoading: false,
                isError: payload,
            }
        
        default:
            return oldState;
        };
};