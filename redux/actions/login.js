import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_ROLE,
  USER_BRAND,
  USER_EMAIL,
  GET_USER_LIST_DATA_LOADING,
  GET_USER_LIST_DATA_SUCCESS,
  GET_USER_LIST_DATA_FAILURE,
  GET_ROLE_DATA_LOADING,
  GET_ROLE_DATA_SUCCESS,
  GET_ROLE_DATA_FAILURE,
  CREATE_USER_DATA_LOADING,
  CREATE_USER_DATA_SUCCESS,
  CREATE_USER_DATA_FAILURE,
  GET_ROLES_PRIVILEGE_LOADING,
  GET_ROLES_PRIVILEGE_SUCCESS,
  GET_ROLES_PRIVILEGE_FAILURE,
  MY_PROFILE_DATA_LOADING,
  MY_PROFILE_DATA_SUCCESS,
  MY_PROFILE_DATA_FAILURE,
  UPDATE_USER_DATA_LOADING,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAILURE,
  GET_USER_BY_ID_LOADING,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  FILTER_USER_LOADING,
  FILTER_USER_SUCCESS,
  FILTER_USER_FAILURE,
  NOTIFICATION_DATA_LOADING,
  NOTIFICATION_DATA_SUCCESS,
  NOTIFICATION_DATA_FAILURE,
  USER_AUTHORITIES,
  GET_DASHBOARD_DATA_LOADING,
  GET_DASHBOARD_DATA_SUCCESS,
  GET_DASHBOARD_DATA_FAILURE,
  ISLOGGEDIN
} from "../types/types";

import { client } from "../../utils/axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const isLoggedIn = (data) => {
  // console.log("data", data)
  return {
    type: ISLOGGEDIN,
    payload: data,
  };
};

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

export const userRole = (data) => {
  return {
    type: USER_ROLE,
    payload: data,
  };
};
export const userBrand = (data) => {
  return {
    type: USER_BRAND,
    payload: data,
  };
};
export const userEmail = (data) => {
  return {
    type: USER_EMAIL,
    payload: data,
  };
};

export const userAuthorities = (data) => {
  return {
    type: USER_AUTHORITIES,
    payload: data,
  };
};

export const getUserDataLoading = () => {
  return {
    type: GET_USER_LIST_DATA_LOADING,
  };
};
export const getUserDataSuccess = (data) => {
  return {
    type: GET_USER_LIST_DATA_SUCCESS,
    payload: data,
  };
};
export const getUserDataFailure = (error) => {
  return {
    type: GET_USER_LIST_DATA_FAILURE,
    payload: error,
  };
};

export const getRoleDataLoading = () => {
  return {
    type: GET_ROLE_DATA_LOADING,
  };
};
export const getRoleDataSuccess = (data) => {
  return {
    type: GET_ROLE_DATA_SUCCESS,
    payload: data,
  };
};
export const getRoleDataFailure = (error) => {
  return {
    type: GET_ROLE_DATA_FAILURE,
    payload: error,
  };
};

export const createUserDataLoading = () => {
  return {
    type: CREATE_USER_DATA_LOADING,
  };
};
export const createUserDataSuccess = (data) => {
  return {
    type: CREATE_USER_DATA_SUCCESS,
    payload: data,
  };
};
export const createUserDataFailure = (error) => {
  return {
    type: CREATE_USER_DATA_FAILURE,
    payload: error,
  };
};

export const getRolesPrivilegeLoading = () => {
  return {
    type: GET_ROLES_PRIVILEGE_LOADING,
  };
};
export const getRolesPrivilegeSuccess = (data) => {
  return {
    type: GET_ROLES_PRIVILEGE_SUCCESS,
    payload: data,
  };
};
export const getRolesPrivilegeFailure = (error) => {
  return {
    type: GET_ROLES_PRIVILEGE_FAILURE,
    payload: error,
  };
};

export const getUserDetailDataLoading = () => {
  return {
    type: MY_PROFILE_DATA_LOADING,
  };
};
export const getUserDetailDataSuccess = (data) => {
  return {
    type: MY_PROFILE_DATA_SUCCESS,
    payload: data,
  };
};
export const getUserDetailDataFailure = (error) => {
  return {
    type: MY_PROFILE_DATA_FAILURE,
    payload: error,
  };
};

export const updateUserDataLoading = () => {
  return {
    type: UPDATE_USER_DATA_LOADING,
  };
};

export const updateUserDataSuccess = (data) => {
  return {
    type: UPDATE_USER_DATA_SUCCESS,
    payload: data,
  };
};

export const updateUserDataFailure = (error) => {
  return {
    type: UPDATE_USER_DATA_FAILURE,
    payload: error,
  };
};

export const getUserByIdLoading = () => {
  return {
    type: GET_USER_BY_ID_LOADING,
  };
};

export const getUserByIdSuccess = (data) => {
  return {
    type: GET_USER_BY_ID_SUCCESS,
    payload: data,
  };
};

export const getUserByIdFailure = (error) => {
  return {
    type: GET_USER_BY_ID_FAILURE,
    payload: error,
  };
};

export const filterUserLoading = () => {
  return {
    type: FILTER_USER_LOADING,
  };
};
export const filterUserSuccess = (data) => {
  return {
    type: FILTER_USER_SUCCESS,
    payload: data,
  };
};
export const filterUserFailure = (error) => {
  return {
    type: FILTER_USER_FAILURE,
    payload: error,
  };
};

export const getNoificationDataLoading = () => {
  return {
    type: NOTIFICATION_DATA_LOADING,
  };
};
export const getNoificationDataSuccess = (data) => {
  return {
    type: NOTIFICATION_DATA_SUCCESS,
    payload: data,
  };
};
export const getNoificationDataFailure = (error) => {
  return {
    type: NOTIFICATION_DATA_FAILURE,
    payload: error,
  };
};

export const getDashBoardDataLoading = () => {
  return {
    type: GET_DASHBOARD_DATA_LOADING,
  };
};
export const getDashBoardDataSuccess = (data) => {
  return {
    type: GET_DASHBOARD_DATA_SUCCESS,
    payload: data,
  };
};
export const getDashBoardDataFailure = (error) => {
  return {
    type: GET_DASHBOARD_DATA_FAILURE,
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
        // console.log("hello userLoginApi", response);
        toast.info("Login Successfully !!!");
        if (response?.data?.statusCode === 201) {
          // console.log("hello Login post==>", response.data);
          dispatch(
            userLoginSuccess(
              response?.data?.statusCode,
              "Login Post Successfully",
              "LOGIN POST"
            )
          );
          dispatch(
            userRole(
              response?.data?.result?.role,
              "Login role saved Successfully",
              "LOGIN DETAILS"
            )
          );
          dispatch(
            userBrand(
              response?.data?.result?.brand,
              "Login brand saved Successfully",
              "LOGIN DETAILS"
            )
          );
          dispatch(
            userEmail(
              response?.data?.result?.email,
              "Login email saved Successfully",
              "LOGIN DETAILS"
            )
          );
          // console.log("userLoginApi authorities", response.data);
          dispatch(userAuthorities(response?.data?.result?.authorities));
          // dispatch(getDashBoardApi());
          dispatch(getNotificationApi());
          dispatch(myProfileApi());

          // console.log(
          //   "response?.data?.result?.role",
          //   response?.data?.result?.role
          // );

          // navigate('/dashboard/dashboard');
        } else throw new Error("");
      })
      .catch((err) => {
        const { status = {} } = err?.response;
        if (status == 502) {
          toast.error("Bad gateway !!!");
        }
        if (status == 401) {
          toast.error("Please enter correct user name and password");
        }
        else {
          toast.error("User not found!!!");
        }

        console.log("error caught in -> actions/login", err);
        dispatch(userLoginFailure(err, "Something went wrong", "LOGIN POST"));
      });
  };
};

export const getUserListApi = (pageNo, pageSize) => {
  const data = {
    pageNo: pageNo,
    pageSize: pageSize,
  };
  return (dispatch) => {
    dispatch(getUserDataLoading("USER....", "USER"));
    client
      .post("/api/login/userList", data)
      .then((response) => {
        // console.log(" getUserListApi response", response);

        if (response?.data.statusCode === 200) {
          // console.log("API SUCCESS2", response.data);
          dispatch(getUserDataSuccess(response.data.result));
        }
      })
      .catch((err) => {
        console.log("actions/login/GET USER LIST =>FAILURE", err);
        dispatch(getUserDataFailure(err));
      });
  };
};

export const getRoleApi = () => {
  return (dispatch) => {
    dispatch(getRoleDataLoading("ROLE....", "ROLE"));
    client
      .get("/api/login/getRole")
      .then((response) => {
        // console.log("hello api response",response.status)
        //   console.log(response)
        if (response?.status === 200) {
          console.log("hello API  getRoleApi SUCCESS2", response);
          dispatch(getRoleDataSuccess(response.data));
        }
      })
      .catch((err) => {
        console.log("actions/login/ GET ROLE =>FAILURE", err);
        dispatch(getRoleDataFailure(err));
      });
  };
};

export const createUserApi = (data) => {
  // let result = false;
  // console.log("hello   called", data);
  return (dispatch) => {
    dispatch(createUserDataLoading("USER CREATE....", "USER"));
    client
      .post("/api/login/userCreate", data)
      .then((response) => {
        // console.log("---------userApi------", response.status);
        // result = true;
        if (response.status === 200) {
          // toast.info("User Create Successfully !!!");
          // console.log("user ==>", response.data.result);
          dispatch(
            createUserDataSuccess(
              response.data.result,
              "User Create Successfully",
              "User CREATE"
            )
          );
        } else throw new Error("");
      })
      .catch((err) => {
        // toast.error("User Data Not Found!!!");
        console.log("error caught in -> actions/login/createUser", err);
        //result = false;
        dispatch(
          createUserDataFailure(err, "Something went wrong", "User CREATE")
        );
      });

    // return result;
  };
};

export const getRolePrivilegeApi = () => {
  return (dispatch) => {
    dispatch(getRolesPrivilegeLoading("ROLE....", "PRIVILEGES"));
    client
      .get("/api/login/rolesPrivilege")
      .then((response) => {
        if (response?.status === 200) {
          // console.log("getRolesPrivilegeSuccess", response);
          dispatch(getRolesPrivilegeSuccess(response.data));
        }
      })
      .catch((err) => {
        console.log(
          "error caught in -> actions/login/getRolePrivilegeApi",
          err
        );

        dispatch(getRolesPrivilegeFailure(err));
      });
  };
};

export const myProfileApi = () => {
  return (dispatch) => {
    dispatch(getUserDetailDataLoading("MY PROFILE....", "PROFILE"));
    client
      .get("/api/userApi")
      .then((response) => {
        // console.log(
        //   "<<<<<<<<<<<<<<<<<<My Profile>>>>>>>>>>>>>>>>>>>>>>>",
        //   response
        // );
        dispatch(
          isLoggedIn(
            response?.data?.isLoggedIn,
            "Login isLoggedIn saved Successfully",
            "LOGIN DETAILS"
          )
        );
        dispatch(
          getUserDetailDataSuccess(
            response?.data?.statusCode,
            "Login Post Successfully",
            "LOGIN POST"
          )
        );
        dispatch(
          userRole(
            response?.data?.role,
            "User role saved Successfully",
            "User DETAILS"
          )
        );

        dispatch(userEmail(response?.data?.email, "User email saved Successfully", "User DETAILS"));
        dispatch(userAuthorities(response.data.authorities));
      })
      .catch((err) => {
        console.log("error caught in -> actions/login/myProfileApi", err);
        dispatch(getUserDetailDataFailure(err));
      });
  };
};

export const getUserByIdApi = (userId) => {
  const data = {
    userId: userId,
  };

  return (dispatch) => {
    dispatch(getUserByIdLoading("USERS BY ID....", "USERS BY ID"));
    client
      .post("/api/login/getUserById", data)
      .then((response) => {
        // console.log("api response",response)
        if (response?.status === 200) {
          // console.log("API SUCCESS2", response.data.result);
          dispatch(getUserByIdSuccess(response.data.result));
        }
      })
      .catch((err) => {
        console.log("actions/onboardQuery/ GET USERS BY ID =>FAILURE", err);
        dispatch(getUserByIdFailure(err));
      });
  };
};

export const updateUserApi = (updateData) => {
  //console.log("hello  brandupdateApi info",info)
  const data = {
    userId: updateData?.userId,
    roleId: updateData?.roleId,
    Status: updateData?.Status,
  };

  //  console.log("hello  brandupdateApi data",data)

  return (dispatch) => {
    dispatch(updateUserDataLoading("UPDATE....", "USER"));
    client
      .post("/api/login/updateUser", data)
      .then((response) => {
        // console.log("rrrrrr",response)
        if (response.status === 200) {
          // toast.info("Brand Updated Successfully !!!");
          // console.log("BrandGreat==>", response.data);
          dispatch(updateUserDataSuccess(response.data));
        } else throw new Error("");
      })
      .catch((err) => {
        // toast.error("Brand update Failed!!!");
        console.log("error caught in -> actions/user/update", err);
        dispatch(updateUserDataFailure(err));
      });
  };
};

export const filterUserApi = (pageNo, pageSize, role) => {
  const data = {
    pageNo: pageNo,
    pageSize: pageSize,
    role: role,
  };
  return (dispatch) => {
    dispatch(getUserDataLoading("USER....", "USER"));
    client
      .post("/api/login/filterRole", data)
      .then((response) => {
        // console.log(" getUserListApi response", response);

        if (response?.data.statusCode === 200) {
          // console.log("API SUCCESS2", response.data);
          dispatch(getUserDataSuccess(response.data.result));
        }
      })
      .catch((err) => {
        console.log("actions/login/filterUser.js =>FAILURE", err);
        dispatch(getUserDataFailure(err));
      });
  };
};

export const getNotificationApi = () => {
  return (dispatch) => {
    dispatch(getNoificationDataLoading("ROLE....", "PRIVILEGES"));
    client
      .get("/api/login/notification")
      .then((response) => {
        // console.log("getNoificationDataSuccess", response);
        if (response?.status === 200) {
          dispatch(getNoificationDataSuccess(response.data));
        }
      })
      .catch((err) => {
        console.log("error caught in -> actions/login/getNoificationApi", err);

        dispatch(getNoificationDataFailure(err));
      });
  };
};

export const getDashBoardApi = () => {
  return (dispatch) => {
    dispatch(getDashBoardDataLoading("..DashBoard..", "DashBoard"));
    client
      .get("/api/login/dashBoard")
      .then((response) => {
        // console.log("hello api response",response.status)
        //   console.log(response)
        if (response?.status === 200) {
          // console.log("hello API  DashBoard SUCCESS2", response);
          dispatch(getDashBoardDataSuccess(response.data));
        }
      })
      .catch((err) => {
        console.log("actions/login/ GET DashBoard =>FAILURE", err);
        dispatch(getDashBoardDataFailure(err));
      });
  };
};
