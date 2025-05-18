import React, { useState } from "react";
import "./navigation.styles.scss";
import { Outlet ,Link} from 'react-router-dom';
import { Fragment } from "react";
import dt3 from '../../asstes/logo/dt3.png'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Fragment>
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo"> 
          
          <Link to={'/'}><img src={dt3} alt="Logo" /></Link>
          </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work </a></li>
          <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonial</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a></li>
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
