import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import { loginUser } from './../api/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await loginUser(userData);  // Llamada a la función para hacer el login
      localStorage.setItem('token', response.token);  // Guardar el token en localStorage
      navigate('/addCar');  // Redirigir a la página de inicio
    } catch (error) {
      console.error('Error al hacer login', error);
      alert('Credenciales incorrectas o error en el servidor');
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
