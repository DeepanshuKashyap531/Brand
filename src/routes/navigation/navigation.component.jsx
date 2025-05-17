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
          
          <img src={ContentCove} alt="Logo" />
          </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work Showcaswe</a></li>
          <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
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
