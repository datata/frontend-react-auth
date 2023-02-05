import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateIsLogged, updateJwt, updateUserProfile } from '../../../feature/auth/authSlice'
import { login, profile } from "../../../services/apiCalls";

import './LoginComponent.css'

export const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
      
    const [loginUserData, setLoginUserData] = useState({
        email: "",
        password: "",
    });

    function loginDataHandle(e) {
        setLoginUserData({
            ...loginUserData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const loginResult = await login(loginUserData);

        if (!loginResult.success) {
            return alert(loginResult?.message)
        } else {
            dispatch(updateJwt(loginResult.token));
            dispatch(updateIsLogged(true))
        }

        const userProfile = await profile(loginResult.token);

        if (!userProfile.success) {
            navigate('/login');
        } else {
            dispatch(updateUserProfile(userProfile.data))
            navigate('/home');
        }
    }

    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="email">email:</label> */}
                    <div>
                        <input className="login-input" type="email" name='email' onChange={loginDataHandle} placeholder="email" required />
                    </div>
                    {/* <label htmlFor="password">password</label> */}
                    <div>
                        <input className="login-input" type="password" name='password' onChange={loginDataHandle} placeholder="*******" required />
                    </div>
                    <button className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}
