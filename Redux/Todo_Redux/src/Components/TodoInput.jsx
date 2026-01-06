import React from 'react';

import { initialValue, reducer } from '../Reducer/Reducer';
import * as types from '../Reducer/Action';
import { TodoList } from './TodoList';
// import { myOwnStore } from '../App/Store';

export const TodoInput = () => {
    const todoText = React.useRef(null);
    const [ state,dispatch ] = React.useReducer(reducer, initialValue);
    console.log('🚀 ~ state:', state);

    const handleAddTodo = () =>{
        const value = todoText.current.value;
        if (value === '') {
            dispatch({ type: types.ERROR_TODO_ITEMS});
            return;
        }

        dispatch({ type: types.LOADING_TODO_ITEMS});

        setTimeout(() =>{
             dispatch({ type: types.ADD_TODO_ITEMS, payload: value });
        },1000);
        todoText.current.value= '';
    };

    if (state.isLoading) return <h1>Loading...</h1>;

     return(
        <>
        <input ref={todoText} type='text' placeholder='Enter Your Task!!!'/>
        <button onClick={()=>handleAddTodo()}>Add</button>
        {state.isError ? (
            <h1>Something Went Wrong...</h1>
        ):(
        <TodoList value= {{ state,dispatch }}/>
        )}
        {/* <TodoList value= {{ state,dispatch }}/> */}
        </>
     );
};