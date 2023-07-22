import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginPage() {
  return (
    <div style={{ margin: "2vw 2vw 2vw 2vw" }}>
      <Login />
      <br></br>
      <SignUp />
    </div>
  );
}

export default LoginPage;
