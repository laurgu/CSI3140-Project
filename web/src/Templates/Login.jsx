import React, {useState} from "react";
import {api} from "../api/api";
import {useNavigate} from "react-router-dom";
import {Button, TextField, Box} from "@mui/material";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        const trimmedPassword = password.trim();
        console.log("Entered password:", trimmedPassword);
        console.log("Password length:", trimmedPassword.length);
        for (let i = 0; i < trimmedPassword.length; i++) {
            console.log(`Character at index ${i}: ${trimmedPassword.charCodeAt(i)}`);
        }

        // Make a POST request to your backend API for login
        api
            .post("/api/login", {email, password: trimmedPassword})
            .then((response) => {
                if (response.data.message) {
                    console.log(response.data.message);
                    return;
                }
                const {token} = response.data;
                console.log("JWT Token: ", token);
                localStorage.setItem("token", token);
                navigate("/")
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    };

    return (
        <div>
            <h2>Login</h2>
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
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </Box>
        </div>
    );
}

export default Login;
