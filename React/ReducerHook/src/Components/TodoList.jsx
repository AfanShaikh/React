import React from 'react';

import * as type from '../Reducer/Action';
 
export const TodoList = ({ value }) =>{
    const editValue = React.useRef(null);
    const { state, dispatch } = value;

    const handleClickDelete = (id) =>{
        dispatch({ type: type.DELETE_TODO_ITEMS, payload: id});
    };

    const handleClickEdit = (id) =>{
         dispatch({ type: type.EDITS_TODO_ITEMS, payload: id});
    };

    const handleClickConfirm = (id) => {
        const editText = editValue.current.value.trim();
        dispatch({type: type.EDITS_TODO_ITEMS, payload: { updatedText: editText, id: id}});
    };
 
    const handleClickCancel = (id) =>{
        dispatch({ type: type.EDITS_TODO_ITEMS, payload: id});
    };
    return(
        <>
        {state.items && state.items.map((el) =>{
            return(
                <ul
                 key = {el.id}
                 style = {{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    listStyle: 'none'
                 }} 
                >
                    <input type="checkbox"/>
                    <li>{el.id}</li>
                    {el.isEdits ? (
                     <input ref={editValue} defaultValue={el.text} type="text"/>   
                    ) :(
                        <li>{el.text}</li>
                    )}
                    <div style={{ display: 'flex', gap: '10px'}}>
                        { el.isEdits? (
                            <>
                            <button 
                            style= {{
                                background: 'yellowgreen'
                            }}
                            onClick={() => handleClickConfirm(el.id)}
                            >
                            Confirm
                            </button>
                            <button style={{background: '#dc143c'}} onClick={() => handleClickCancel(el.id)}>
                                Cancel
                            </button>
                            </>
                        ): (
                            <>
                            <button style={{background: 'yellowgreen'}} onClick={()=> handleClickEdit(el.id)}>Edit</button>
                            <button style={{background: '#dc143c'}} onClick={() => handleClickDelete(el.id)}>Delete</button>
                            </>
                        ) }
                    </div>
                </ul>
            );
        })}
        </>
    );

};