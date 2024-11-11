import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setError("Passwords don't match");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setError("");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center bg-neutral-800 rounded p-12 gap-5">
      <div className="text-gray-200 text-3xl flex flex-col items-center text-center">
        <img src="favicon.ico" alt="Logo" />
        <h1>Create Account</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="p-3 flex-grow border-none rounded bg-neutral-700 text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-neutral-900 focus:text-white"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="p-3 flex-grow border-none rounded bg-neutral-700 text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-neutral-900 focus:text-white"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-col md:flex-row gap-5">
          <input
            className="p-3 flex-grow border-none rounded bg-neutral-700 text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-neutral-900 focus:text-white"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="p-3 flex-grow border-none rounded bg-neutral-700 text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-neutral-900 focus:text-white"
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <button
          className="px-4 py-2 text-orange-500 border border-orange-500 rounded transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          type="submit"
        >
          Create Account
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="text-sm">
        <span className="text-gray-500">Already have an account? </span>
        <Link
          to="/login"
          className="text-orange-500 hover:text-white focus:text-white"
        >
          Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
