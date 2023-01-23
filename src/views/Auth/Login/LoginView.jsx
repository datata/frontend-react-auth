import { useNavigate } from "react-router-dom";


function LoginView() {
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.elements['email'].value;
    const password = e.currentTarget.elements['password'].value;

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
      localStorage.setItem('token', '');
    } else {
      localStorage.setItem('token', result.token);
      navigate('/home')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="text" name='email' placeholder="email" />
        <label htmlFor="password">password</label>
        <input type="password" name='password' placeholder="" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginView;