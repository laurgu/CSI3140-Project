import React, {useState} from "react";
import {api} from "../api/api";
import {Button, TextField, Box} from "@mui/material";


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
            <Box component="Form">
                <TextField
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
            </Box>
        </div>
    );
}

export default SignUp;
