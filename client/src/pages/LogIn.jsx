import React from "react";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";

export default function LogIn(props) {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn {...props} />
      <h1>Sign Up</h1>
      <SignUp />
    </div>
  );
}
