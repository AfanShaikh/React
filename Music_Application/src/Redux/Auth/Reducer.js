import * as types from "./ActionTypes";
import { loadData, saveData, removeData } from "../../utils/localStorage";

const token = "token";

const initialValue = {
  isAuth: loadData(token) ? true : false,
  token: loadData(token) || "",
  isError: false,
  isLoading: false,
};

const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case types.POST_LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.POST_LOGIN_SUCCESS:
      saveData(token, payload);
      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        token: payload,
      };

    case types.POST_LOGIN_FAILURE:
      return {
        ...oldState,
        isError: true,
        isLoading: false,
      };

    case types.TOKEN_REMOVE:
      removeData(token);
      return {
        ...oldState,
        isAuth: false,
        token: "",
      };

    default:
      return oldState;
  }
};

export { Reducer };
