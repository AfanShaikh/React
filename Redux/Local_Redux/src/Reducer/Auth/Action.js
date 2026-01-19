export const REMOVE_TOKEN = 'REMOVE_TOKEN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST' 
export const LOGIN_SUCCESSFULL = 'LOGIN_SUCCESSFULL'


const getLogin = () => {
    return{ type: REMOVE_TOKEN};
};


const loginSuccessfull = (payload) => {
    return { type: LOGIN_SUCCESSFULL , payload:  payload };
};
const loginFailure = (payload) => {
    return { type: LOGIN_FAILURE , payload:  payload };
};

export { getLogin, loginSuccessfull, loginFailure };