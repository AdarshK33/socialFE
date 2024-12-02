import findFriend from "../../pages/api/socialApi/findFriend";
import {
    FIND_FRIEND_LOADING,
    FIND_FRIEND_SUCCESS,
    FIND_FRIEND_FAILURE,
  } from "../types/types";
  
  const initialState = {
    loading: false,
    findFriend: {},
  };
  const socialReducer = (state = initialState, action) => {
    console.log("hello loginReducer called", action)
    switch (action.type) {
      case FIND_FRIEND_LOADING:
        return {
          ...state,
          loading: true,
        };
      case FIND_FRIEND_SUCCESS:
        return {
          ...state,
          loading: false,
          findFriend: action.payload,
          error: {},
        };
      case FIND_FRIEND_FAILURE:
        return {
          ...state,
          loading: false,
          findFriend: [],
          error: action,
        };
  
      default:
        return state;
    }
  };
  
  export default socialReducer;
  