import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-links">
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contacts</Link>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <Link to="">Terms of use</Link>
          </li>
          <li>
            <Link to="#">Sitemap</Link>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <Link to="#">Privacy Policy</Link>
          </li>
          <li>
            <Link to="#">Coockies Policy</Link>
          </li>
        </ul>
        <div className="logo-container">
          <img src="favicon.ico"></img>
        </div>
      </div>
      <div className="footer-text">
        <p>
          © 2024, <Link to="https://nullyarcv.vercel.app/">nullyar</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
