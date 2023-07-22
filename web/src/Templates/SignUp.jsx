import React, { useState } from "react";
import { api } from "../api/api";
import { Button, TextField, Box } from "@mui/material";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Make a POST request to your backend API for registration
    api
      .post("/api/register", { email, password })
      .then((response) => {
        window.alert("Sign up successful. Please login to continue.");
        console.log(response.data.message);
      })
      .catch((error) => {
        window.alert(error.response.data.message);
        console.log(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Box component="Form">
        <TextField
          type="email"
          placeholder="email"
          value={email}
          style={{ marginRight: "2vw" }}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
}

export default SignUp;
