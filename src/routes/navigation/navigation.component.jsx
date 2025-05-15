import React, { useState } from "react";
import "./navigation.styles.scss";
import { Outlet } from 'react-router-dom';
import { Fragment } from "react";
import ContentCove from '../../asstes/logo/ContentCove.png'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo"> 
          
          <img src={ContentCove} />
          </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <button className="contact-btn">Contact</button>
          <input type="text" placeholder="Search..." />
        </div>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <Outlet />
    </Fragment>
  );
};

export default Navigation;
