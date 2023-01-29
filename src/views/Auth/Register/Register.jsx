import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';


function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function nameHandle(e) {
        e.preventDefault();
        setName(e.target.value)
    }

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

        const data = {
            name,
            email,
            password
        }

        const register = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await register.json();
        if (!result.success) {
            alert(result?.message || 'Something went wrong');
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
                        <input type="text" name='name' className="register-input" onChange={nameHandle} placeholder="name" required />
                    </div>
                    {/* <label htmlFor="email">email:</label> */}
                    <div>
                        <input type="email" name='email' className="register-input" onChange={emailHandle} placeholder="email" required />
                    </div>
                    {/* <label htmlFor="password">password</label> */}
                    <div>
                        <input type="password" name='password' className="register-input" onChange={passwordHandle} placeholder="*******" required />
                    </div>
                    <button className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;