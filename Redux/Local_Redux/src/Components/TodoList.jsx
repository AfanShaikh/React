import  React from 'react';

import { useDispatch, useSelector  } from 'react-redux';

import * as types from '../Reducer/Todos/Action';

export const TodoList = () => {
    const dispatch = useDispatch();

    const value = useSelector((xyz) =>{
        return xyz.todo;
    });
    console.log('🚀 ~ value:', value);

    const handleEdit = (id) =>{
        dispatch({type: types.EDITTODOS, payload: id});
    }


    const handleDelete = (id) =>{
        dispatch({type: types.DELETETODOS, payload: id});
    }


    return(
        <>
        {value && value.map((el) =>{
            return(
                <div
                key={el.id}
                style={{
                    width: '50%',
                    margin: '10px auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                }}
                >
                    <input type="checkbox" />
                    <h3>{el.id}</h3>
                    <p>{el.text}</p>
                    <button onClick={() => handleEdit(el.id)}>Edit</button>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
            )
        })}
        </>
    )
};