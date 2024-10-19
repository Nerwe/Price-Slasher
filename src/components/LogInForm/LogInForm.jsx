import React from "react";
import { Link } from "react-router-dom";
import './LogInForm.scss'

const LogInForm = () => {
  return (
    <div className="login-form">
      <div className="form-header">
        <img src="favicon.ico"></img>
        <h2 className="title">Login</h2>
      </div>
      <form className="form-main">
        <input
          className="form-input"
          type="text"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <input
          className="submit-button"
          type="submit"
          name="submitButton"
          value="Login"
        ></input>
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
