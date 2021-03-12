import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

import { loadData } from "../../utils/localStorage";
const token = loadData("token");
const initState = {
  isAuth: token ? true : false,
  token: token || "",
  username: null,
  isError: false,
  isLoading: false,
};

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        token: payload,
        username: payload,
        isLoading: false,
        isError: false,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export { authReducer };
