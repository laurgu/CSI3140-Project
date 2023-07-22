import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LoginPage() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "5vw",
  };

  return (
    <div style={containerStyle}>
      <Login />
      <div style={{ marginBottom: "2vw" }}></div>
      <SignUp />
    </div>
  );
}

export default LoginPage;
