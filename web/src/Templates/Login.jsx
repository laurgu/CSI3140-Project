import React, { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Box } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    const trimmedPassword = password.trim();

    // Make a POST request to your backend API for login
    api
      .post("/api/login", { email, password: trimmedPassword })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message);
          return;
        }
        const { token } = response.data;
        console.log("JWT Token: ", token);
        localStorage.setItem("token", token);
        navigate("/");
      })
      .catch((error) => {
        window.alert(error.response.data.message);
        console.log(error.response.data.message);
      });
  }

  return (
    <div>
      <h2>Login</h2>
      <Box component="Form">
        <TextField
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          style={{ marginRight: "2vw" }}
          required
        />
        <TextField
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          variant="contained"
          style={{ marginLeft: "2vw" }}
          onClick={() => handleLogin()}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default Login;
