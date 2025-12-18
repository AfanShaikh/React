import React from 'react';

import { reducer } from '../Reducer/Reducer';
import { initialValue } from '../Reducer/Store';
import { ADD_TODO_ITEMS } from '../Reducer/Action';
import { TodoList } from './TodoList';

export const TodoInput = () => {
    const todoText = React.useRef(null);
    const [ state,dispatch ] = React.useReducer(reducer, initialValue);
    console.log('🚀 ~ state:', state);

    const handleAddTodo = () =>{
        const value = todoText.current.value;
        if (value === '') return;
        dispatch({ type: ADD_TODO_ITEMS, payload: value });
        todoText.current.value= '';
    };

     return(
        <>
        <input ref={todoText} type='text' placeholder='Enter Your Task!!!'/>
        <button onClick={handleAddTodo}>Add</button>
        <TodoList value= {{ state,dispatch }}/>
        </>
     );
};