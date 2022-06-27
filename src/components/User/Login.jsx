import React, { Component, useReducer, useState } from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import "../components/css/Register.css"
// import { Link, useLocation, useNavigate } from "react-router-dom"
import "./Login.css"
const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    // const navigate = useNavigate()

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value
        })
    }
    const login = () => {
        axios.post("https://localhost:5000/login", user)
            .then(res => {
                alert("Login successful");
                setLoginUser(res.data.user)
            })
            // navigate("/")
    }

    return (

        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button">
                Register
            </div>
        </div>

    )
}
export default Login;
