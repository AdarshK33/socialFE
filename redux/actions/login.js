import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_PROFILE_LOADING ,
 USER_PROFILE,
 USER_PROFILE_FAILURE ,
 USER_SIGNUP_LOADING,
 USER_SIGNUP_SUCCESS,
 USER_SIGNUP_FAILURE,
} from "../types/types";

import { client } from "../../utils/axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";


export const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
  };
};
export const userLoginSuccess = (data) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: data,
  };
};
export const userLoginFailure = (error) => {
  return {
    type: USER_LOGIN_FAILURE,
    payload: error,
  };
};
export const myProfileLoading = (data) => {
  return {
    type: USER_PROFILE_LOADING,
  };
};
export const myProfile = (data) => {
  return {
    type: USER_PROFILE,
    payload: data,
  };
};
export const myProfileDataFailure = (data) => {
  return {
    type: USER_PROFILE_FAILURE,
    payload: error,
  };
};




export const userSignUpLoading = () => {
  return {
    type: USER_SIGNUP_LOADING,
  };
};
export const userSignUpSuccess = (data) => {
  return {
    type: USER_SIGNUP_SUCCESS,
    payload: data,
  };
};
export const userSignUpFailure = (error) => {
  return {
    type: USER_SIGNUP_FAILURE,
    payload: error,
  };
};

export const userLoginApi = (data) => {
  // console.log("hello  userLoginApi called",data)
  return (dispatch) => {
    dispatch(userLoginLoading("LOGIN....", "LOGIN"));
    client
      .post("/api/login/userLogin", data)
      .then((response) => {
        // console.log("hello userLoginApi", response?.data);
       
        if (response?.data?.success ) {
          toast.info("Login Successfully !!!");
          dispatch(userLoginSuccess(response?.data?.user))
        } else throw new Error("");
      })
      .catch((err) => {
        if(err?.response){
        const { status = {} } = err?.response;
        if (status == 502) {
          toast.error("Bad gateway !!!");
        }
        if (status == 401) 
          {
          toast.error("Please enter correct user name and password");
        }
        else {
          toast.error("User not found!!!");
        }
        console.log("error caught in -> actions/login", err);
        dispatch(userLoginFailure(err, "Something went wrong", "LOGIN POST"));
      }
      });
  };
};
export const myProfileApi = () => {
  return (dispatch) => {
    dispatch(myProfileLoading("MY PROFILE....", "PROFILE"));
    client
      .get("/api/userApi")
      .then((response) => {
        console.log(
          "<<<<<<<<<<<<<<<<<<My Profile>>>>>>>>>>>>>>>>>>>>>>>",
          response
        );
        dispatch(
          myProfile(
            response?.data,
            "Login isLoggedIn saved Successfully",
            "LOGIN DETAILS"
          )
        );

    
      })
      .catch((err) => {
        console.log("error caught in -> actions/login/myProfileApi", err);
        dispatch(myProfileDataFailure(err));
      });
  };
}; 

export const signUpApis = (data) => {
  return (dispatch) => {
    dispatch(userSignUpLoading("STATUS....", "STATUS"));
    client
      .post("/api/login/signUp", data)
      .then((response) => {
        // console.log("rrrrrr", response);
        if (response?.data?.success ) {
          dispatch(
            userSignUpSuccess(
              response.data,
              " status Successfully",
              "status UPDATE"
            )
          );
          toast.info("sign up successfully !!!");
        } else throw new Error("");
      })
      .catch((err) => {
        toast.error("sign up failed!!!");
        console.log(
          "error caught in -> actions/login/sign up",
          err
        );
        dispatch(
          userSignUpFailure(
            err,
            "Something went wrong",
            " "
          )
        );
      });
  };
};