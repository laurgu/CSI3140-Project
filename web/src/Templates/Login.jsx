import React, { useState } from "react";
import { api } from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const trimmedPassword = password.trim();
    console.log("Entered password:", trimmedPassword);
    console.log("Password length:", trimmedPassword.length);

    api
      .post("/api/login", { email, password: trimmedPassword })
      .then((response) => {
        const { token } = response.data;
        console.log("JWT Token: ", token);
        localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch((error) => {
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
          placeholder="email"
          style={{ marginRight: "1vw" }}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          style={{ marginRight: "1vw" }}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
