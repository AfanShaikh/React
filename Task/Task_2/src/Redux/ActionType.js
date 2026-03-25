import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './Action';

let id = 0;

export const addNotify = (msg , type) =>(dispatch) =>{
    let newID = ++id;

    dispatch({type: ADD_NOTIFICATION, payload: {id: newID, msg, type}});

    // Auto-remove after 3-5 seconds
    setTimeout(()=>{
        dispatch({type: REMOVE_NOTIFICATION, payload: newID});
    }, 3000);
};

export const removeNotify = (id) => (dispatch) =>{
    dispatch({type: REMOVE_NOTIFICATION, payload: id});
};