import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.scss'

const SignUpForm = () => {
  return (
    <div className="signup-form">
      <div className="form-header">
        <img src="favicon.ico"></img>
        <h2 className="title">Create Account</h2>
      </div>
      <form className="form-main">
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Username"
        ></input>
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
        ></input>
        <div className="password-container">
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <input
            className="form-input"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
          ></input>
        </div>
        <input
          className="submit-button"
          type="submit"
          name="submitButton"
          value="Create Account"
        ></input>
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