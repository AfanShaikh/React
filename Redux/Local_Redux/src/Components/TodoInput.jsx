import React from 'react'
import { useRef } from 'react'

import { useDispatch } from 'react-redux'
import  * as types from '../Reducer/Todos/Action'
import { getLogin } from '../Reducer/Auth/Action'


export const TodosInput = () => {
      
      const dispatch = useDispatch();
      const inputData = useRef(null);

      const handleAdd = () =>{
        const valueText = inputData.current.value;
        dispatch({  type: types.ADDTODOS, payload: valueText})
        inputData.current.value=''
      };
 
      const handleLogout = () =>{
        dispatch(getLogin())
      };

  return (
    <>
    <button style={{display: 'block'}} onClick={handleLogout}>Logout</button>
    <h1>Todo</h1>
    <input type="text" name="" id=""  ref={inputData} />
    <button onClick={handleAdd}>Add Todo</button>
      
    </>
  )
}


