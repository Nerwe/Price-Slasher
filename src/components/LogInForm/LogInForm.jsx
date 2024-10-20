import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LogInForm.scss'

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError("Email or password is empty");
      return;
    }

    localStorage.setItem('username', email.split('@')[0]);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setError('');

    navigate('/');
  };

  return (
    <div className="login-form">
      <div className="form-header">
        <img src="favicon.ico"></img>
        <h2 className="title">Login</h2>
      </div>
      <form className="form-main" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          className="submit-button"
          type="submit"
          name="submitButton"
          value="Login"
        ></input>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <div className="form-footer">
        <span className="text">Don't have an account? </span>
        <Link to="/login" className="text-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;
