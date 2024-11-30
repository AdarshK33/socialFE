import {
  USER_LOGIN_LOADING,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,

  
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
