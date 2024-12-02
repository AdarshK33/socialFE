import {
    FIND_FRIEND_LOADING,
    FIND_FRIEND_SUCCESS,
    FIND_FRIEND_FAILURE,
    GET_STORY_LOADING,
    GET_STORY_SUCCESS,
    GET_STORY_FAILURE,
    POST_STORY_UPLOAD_LOADING,
    POST_STORY_UPLOAD_SUCCESS,
    POST_STORY_UPLOAD_FAILURE
  } from "../types/types";
  
  import { client,uploadClient } from "../../utils/axios";
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
   
 
  export const   getStoryLoading = () => {
    return {
      type: GET_STORY_LOADING,
    };
  };
  export const  getStorySuccess = (data) => {
    return {
      type: GET_STORY_SUCCESS,
      payload: data,
    };
  };
  export const getStoryFailure = (error) => {
    return {
      type: GET_STORY_FAILURE,
      payload: error,
    };
  };
   
  export const  storyPostUploadLoading = () => {
    return {
      type: POST_STORY_UPLOAD_LOADING,
    };
  };
  export const  storyPostUploadSuccess = (data) => {
    return {
      type: POST_STORY_UPLOAD_SUCCESS,
      payload: data,
    };
  };
  export const storyPostUploadFailure = (error) => {
    return {
      type: POST_STORY_UPLOAD_FAILURE,
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


  export const getStoryApi = (userid) => {
    const data = {
      userid: userid,
    };
    return (dispatch) => {
      dispatch(getStoryLoading("STATUS....", "STATUS"));
      client
        .post("/api/socialApi/getStoryPost", data)
        .then((response) => {
          // console.log("rrrrrr", response);
          if (response) {
            dispatch(
              getStorySuccess(
                response?.data,
                " getStory Successfully",
                "status getStory"
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
            getStoryFailure(
              err,
              "Something went wrong",
              " "
            )
          );
        });
    };
  };



  export const storyPostUploadApi = (data) => {
    return (dispatch) => {
      dispatch(storyPostUploadLoading("BULK....", "UPLOAD"));
      uploadClient
        .post("/api/socialApi/postUpload", data)
        .then((response) => {
          toast.info("Post file uploaded successfully !!!");
        dispatch(
          storyPostUploadSuccess(
              "Post Upload Successfully",
              "Post Upload ",
              response
            )
          ); // } else throw new Error("");
        })
        .catch((err) => {
          console.log(
            "error caught in -> actions/socialApi/storyPostUploadApi",
            err
          );
          dispatch(
            storyPostUploadFailure(err, "Something went wrong", "storyPostUploadApi")
             );
        });
    };
  };