import {
    FIND_FRIEND_LOADING,
    FIND_FRIEND_SUCCESS,
    FIND_FRIEND_FAILURE,
  } from "../types/types";
  
  import { client } from "../../utils/axios";
  import { toast } from "react-toastify";
  
 
  
  
  export const  findFriendLoading = () => {
    return {
      type: FIND_FRIEND_LOADING,
    };
  };
  export const  findFriendSuccess = (data) => {
    return {
      type: FIND_FRIEND_SUCCESS,
      payload: data,
    };
  };
  export const findFriendFailure = (error) => {
    return {
      type: FIND_FRIEND_FAILURE,
      payload: error,
    };
  };
   
 
  
  export const getFindFriend = (userid) => {
    const data = {
      userid: userid,
    };
    return (dispatch) => {
      dispatch(findFriendLoading("STATUS....", "STATUS"));
      client
        .post("/api/socialApi/findFriend", data)
        .then((response) => {
          // console.log("rrrrrr", response);
          if (response) {
            dispatch(
              findFriendSuccess(
                response?.data,
                " status Successfully",
                "status UPDATE"
              )
            );
            
          }
        })
        .catch((err) => {
          toast.error(" findFriend failed!!!");
          console.log(
            "error caught in -> actions/social/getFindFriend.",
            err
          );
          dispatch(
            findFriendFailure(
              err,
              "Something went wrong",
              " "
            )
          );
        });
    };
  };