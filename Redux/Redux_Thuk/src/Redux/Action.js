import * as types from '../Redux/ActionTypes';

const getTodosRequest = () => {
    return { type: types.GET_TODOS_REQUEST };
};

const getTodosSuccess = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload };
};

const getTodosFailure = (payload) => {
    return { type: types.GET_TODOS_FAILURE, payload };
};
const addTodosRequest = () => {
    return { type: types.GET_TODOS_REQUEST };
};

const addTodosSuccess = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload };
};

const addTodosFailure = (payload) => {
    return { type: types.GET_TODOS_FAILURE, payload };
};
export { getTodosRequest, getTodosSuccess, getTodosFailure, addTodosRequest, addTodosSuccess, addTodosFailure};
