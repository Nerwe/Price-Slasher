import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="favicon.ico" className="logo-ico"></img>
        <Link to="/" className="logo-text">
          Price Slasher
        </Link>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/giveaways">Giveaways</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/search" className="user-icon">Search</Link>
        <Link to="/login" className="user-icon">Log In</Link>
        <Link to="/register" className="user-icon">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
