import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUpForm.scss'

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {setError("Passwords don't match"); return;}

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    setError('');

    navigate('/');
  };

  return (
    <div className="signup-form">
      <div className="form-header">
        <img src="favicon.ico"></img>
        <h2 className="title">Create Account</h2>
      </div>
      <form className="form-main" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <div className="password-container">
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            className="form-input"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          ></input>
        </div>
        <input
          className="submit-button"
          type="submit"
          name="submitButton"
          value="Create Account"
        ></input>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <div className="form-footer">
        <span className="text">Already have an account? </span>
        <Link to="/login" className="text-link">
          Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUpForm