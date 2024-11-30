import React, { useState } from "react";
import Login from "./login";
import SignUp from "./signup";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and signup
  };

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
