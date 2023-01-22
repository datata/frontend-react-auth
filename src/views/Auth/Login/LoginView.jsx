function LoginView() {
    async function handleSubmit(e) {
        e.preventDefault();
        const email = e.currentTarget.elements['email'].value;
        const password = e.currentTarget.elements['password'].value;
    
        const data = {
          email,
          password
        }
    
        fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            localStorage.setItem('token', res.token);
          })
          .catch((error) => console.log(error));
      }
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input type="text" name='email' placeholder="email"/>
            <label htmlFor="password">password</label>
            <input type="password" name='password' placeholder=""/>
            <button>Login</button>
          </form>
        </div>
      );
}

export default LoginView;