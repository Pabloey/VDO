import React from "react";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import { Divider } from "@mui/material";

export default function LogIn(props) {
  return (
    <div className="login-cont">
      <div
        className="login-other"
        style={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="login-half">
        <SignIn {...props} />
        <Divider/>
        <SignUp />
      </div>
    </div>
  );
}
