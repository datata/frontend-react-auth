import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateJwt } from '../../../feature/auth/authSlice'
import { login } from "../../../services/apiCalls";

import './LoginComponent.css'

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailHandle(e) {
        e.preventDefault();
        setEmail(e.target.value)
    }

    function passwordHandle(e) {
        e.preventDefault();
        setPassword(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const loginData = {
            email,
            password
        }

        const loginResult = await login(loginData);

        if (!loginResult.success) {
            alert(loginResult?.message)
        } else {
            dispatch(updateJwt(loginResult.token));
            navigate('/home');
        }
    }


    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="email">email:</label> */}
                    <div>
                        <input className="login-input" type="email" name='email' onChange={emailHandle} placeholder="email" required />
                    </div>
                    {/* <label htmlFor="password">password</label> */}
                    <div>
                        <input className="login-input" type="password" name='password' onChange={passwordHandle} placeholder="*******" required />
                    </div>
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}
