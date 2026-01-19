import  React from 'react';

import { useDispatch, useSelector  } from 'react-redux';

import * as types from '../Reducer/Todos/Action';

export const TodoList = () => {
    const dispatch = useDispatch();

    const value = useSelector((xyz) =>{
        return xyz.todos.todo;
    });
    console.log('🚀 ~ value:', value);

    const handleEdit = (id) =>{
        dispatch({type: types.EDITTODOS, payload: id});
    }


    const handleDelete = (id) =>{
        dispatch({type: types.DELETETODOS, payload: id});
    }



        const handleConfirm = (id) => {
        dispatch({
            type: types.CONFIRMTODO,
            payload: id,
        });
        };

        const handleCancel = (id) => {
        dispatch({
            type: types.CANCELTODO,
            payload: id,
        });
    };


    return(
        <>
            {value && value.map((el) => {
            return (
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


                    {el.isEdit ? (
                    <>
                        <input
                        type="text"
                        value={el.editText}
                        onChange={(e) =>
                            dispatch({
                            type: types.UPDATETEXT,
                            payload: { id: el.id, text: e.target.value },
                            })
                        }
                        />

                            <button onClick={() => handleConfirm(el.id, el.editText)}>
                                Confirm
                            </button>
                            <button onClick={() => handleCancel(el.id)}>
                                Cancel
                            </button>
                            </>
                    ) : (
                    <>
                        <p>{el.text}</p>
                        <button onClick={() => handleEdit(el.id)}>Edit</button>
                        <button onClick={() => handleDelete(el.id)}>Delete</button>
                    </>
                    )}

                </div>
            );
            })}
        </>
    )
};