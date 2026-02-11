import { useReducer } from "react";

//$ Here we are create the action
const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';



//& Here we have the initial value...
const initialValue = {
    data: [],
    isLoading: false,
    isError: false,
};



const Reducer = (oldState = initialValue, {type, payload}) =>{ 
    switch (type) {
        case FETCH_REQUEST:
            return {
                ...oldState,
                isLoading: true,
            };
        
        case FETCH_SUCCESS:
            return{
                ...oldState,
                isLoading: false,
                data: [...oldState.data, payload],
            };
        
        case FETCH_FAILURE:
            return{
                ...oldState,
                isLoading: false,
                isError: true,
            };

        default:
            return oldState;
    };
};

    export const useFetch = (url) =>{
        const [state, dispatch] = useReducer(Reducer, initialValue);

        
    }; 