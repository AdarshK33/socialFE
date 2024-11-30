import React from "react";
import Forms from "../src/components/form";
import { useSelector } from "react-redux";

export default function SignUp() {
  const { signUp } = useSelector((state) => state.loginReducer);

  return (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <h1>{signUp ? "Login Page" : "Sign Up Page"}</h1>
      <p>{signUp ? "Please log in to continue." : "Create a new account to get started."}</p>
      {!signUp && <Forms />}
      {/* {signUp && <button onClick={() => alert("Navigate to login page")}>Go to Login</button>} */}
    </div>
  );
}
