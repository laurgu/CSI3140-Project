import React, {useState} from "react";

import {api} from "../api/api";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        // Make a POST request to your backend API for registration
        api
            .post("/api/register", {email, password})
            .then((response) => {
                // Handle the response, show success message, redirect to login page, etc.
                console.log(response.data.message);
            })
            .catch((error) => {
                // Handle registration error
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
