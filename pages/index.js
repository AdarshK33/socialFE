import React, { useState, useEffect } from "react";
import Login from "./login";
import SignUp from "./signup";


import { userLoginApi, userSignUpSuccess } from "../redux/actions/login";
import { useDispatch, useSelector } from "react-redux";

import { withIronSessionSsr } from "iron-session/next";

import { sessionOption } from "../utils/session";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup
  const dispatch = useDispatch();
  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

  useEffect(() => {
      if(isLogin){
      dispatch(userSignUpSuccess());
      }
    
  }, [isLogin]);


 
  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      {/* Render Login or Signup form based on isLogin state */}
      {isLogin ? <Login /> : <SignUp />}
      {/* Button to toggle between forms */}
      <button
        onClick={toggleForm}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#DEA3B7", // Preferred color
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isLogin ? "Go to Sign Up" : "Go to Login"}
      </button>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    try {
      const user = req?.session?.user || null;
      // console.log("hello index", user);
      if (user) {
        return {
          redirect: {
            destination: "/myProfile",
            permanent: false,
          },
        };
      }

      return {
        props: {
          user: req?.session?.user || null,
        },
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  sessionOption
);
