import * as types from './Action'

import { dataLoad, dataSave, removeData } from '../../LocalStorage/LocalStorage';

const tokenKeys = 'token';

const tokenValue = dataLoad(tokenKeys);


const initialValue = {
  token: tokenValue || '',
  isAuth: tokenValue ? true : false,
  isError: null,
  isLoading: false
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {

    case types.REMOVE_TOKEN: {
      removeData(tokenKeys);
      return{
        ...state,
        token: '',
        isAuth: false,
      }
    }

    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESSFULL: {
      // if (action.payload !== "fakeToken") return state;

      dataSave(tokenKeys, action.payload)
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    }

    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};