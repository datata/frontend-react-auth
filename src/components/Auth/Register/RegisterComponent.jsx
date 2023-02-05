import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../../services/apiCalls";
import './RegisterComponent.css'

export const RegisterComponent = () => {
    const navigate = useNavigate();
    const [registerUserData, setRegisterUserData] = useState({
        email: "",
        password: "",
        name:""
    });

    function registerDataHandle(e) {
        setRegisterUserData({
            ...registerUserData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const registerResult = await register(registerUserData)

        if (!registerResult.success) {
            alert(
                registerResult?.error?.email
                || registerResult?.error?.name
                || registerResult?.error?.password
                || 'Something went wrong'
            );
        } else {
            navigate('/login');
        }
    }
    
    return (
        <div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    {/* <label htmlFor="name">name:</label> */}
                    <div>
                        <input type="text" name='name' className="register-input" onChange={registerDataHandle} placeholder="name" required />
                    </div>
                    {/* <label htmlFor="email">email:</label> */}
                    <div>
                        <input type="email" name='email' className="register-input" onChange={registerDataHandle} placeholder="email" required />
                    </div>
                    {/* <label htmlFor="password">password</label> */}
                    <div>
                        <input type="password" name='password' className="register-input" onChange={registerDataHandle} placeholder="*******" required />
                    </div>
                    <button className="register-button">Register</button>
                </form>
            </div>
        </div>
    )
}
