import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_PROFILE_LOADING,
  USER_PROFILE,
  USER_PROFILE_FAILURE,
} from "../types/types";

const initialState = {
  loading: false,
  isLogin: {},
  myProfile: {},
};
const loginReducer = (state = initialState, action) => {
  // console.log("hello loginReducer called", action.payload)
  switch (action.type) {
    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: action.payload,
        error: {},
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        isLogin: [],
        error: action,
      };

    case USER_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE:
      return {
        ...state,
        loading: false,
        myProfile: action.payload,
        error: {},
      };
    case USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        myProfile: [],
        error: action,
      };

    default:
      return state;
  }
};

export default loginReducer;
