import React, { useState } from "react";

import { api } from "../api/api";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Make a POST request to your backend API for registration
    api
      .post("/api/register", { email, password })
      .then((response) => {
        console.log(response.data.message);
        window.alert("Account created successfully! Please login.");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        {/* Form fields for email and password */}
        <input
          type="email"
          value={email}
          style={{ marginRight: "1vw" }}
          placeholder="email"
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
