import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Email or password is empty");
      return;
    }

    localStorage.setItem("username", email.split("@")[0]);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    setError("");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center bg-slate-300 dark:bg-neutral-800 rounded p-12 gap-5">
      <div className="text-gray-800 dark:text-gray-200 text-3xl flex flex-col items-center text-center">
        <img src="favicon.ico" alt="Logo" className="mb-4" />
        <h1>Login</h1>
      </div>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          className="p-3 flex-grow border-none rounded bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-white dark:focus:bg-neutral-900 dark:focus:text-white"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-3 flex-grow border-none rounded bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-500 transition-transform text-sm focus:scale-105 focus:bg-white dark:focus:bg-neutral-900 dark:focus:text-white"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-4 py-2 text-orange-500 border border-orange-500 rounded transition-colors hover:bg-orange-500 hover:text-white focus:bg-orange-500 focus:text-white"
          type="submit"
        >
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div className="text-sm text-center">
        <span className="text-gray-500">Don't have an account? </span>
        <Link
          to="/signup"
          className="text-orange-500 hover:text-white focus:text-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogInForm;
