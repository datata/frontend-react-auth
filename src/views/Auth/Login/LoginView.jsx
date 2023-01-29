import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginView.css";


function LoginView() {
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

    const data = {
      email,
      password
    }

    const login = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await login.json();
    if (!result.success) {
      alert(result?.message)
      // localStorage.setItem('isAuth', false);
    } else {
      localStorage.setItem('token', result.token);
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
  );
}

export default LoginView;