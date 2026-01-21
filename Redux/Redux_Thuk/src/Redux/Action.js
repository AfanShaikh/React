import * as types from '../Redux/ActionTypes';

const getTodosRequest = (payload) => {
    return { type: types.GET_TODOS_REQUEST, payload };
};

const getTodosSuccess = (payload) => {
    return { type: types.GET_TODOS_SUCCESS, payload };
};

const getTodosFailure = (payload) => {
    return { type: types.GET_TODOS_FAILURE, payload };
};

export { getTodosRequest, getTodosSuccess, getTodosFailure };
