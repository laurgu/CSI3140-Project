import React, { useState } from "react";
import api from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const trimmedPassword = password.trim();
    console.log("Entered password:", trimmedPassword);
    console.log("Password length:", trimmedPassword.length);
    for (let i = 0; i < trimmedPassword.length; i++) {
      console.log(`Character at index ${i}: ${trimmedPassword.charCodeAt(i)}`);
    }

    // Make a POST request to your backend API for login
    api
      .post("/api/login", { email, password: trimmedPassword })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", token);
      })
      .catch((error) => {
        // Handle login error
        console.log(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        {/* Form fields for email and password */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
