import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Header Background Image */}
      <div className="background-image"></div>

      {/* Image + Content Section */}
      <div className="header-top">
        <img
          src="src/assets/profile_pic.png"
          alt="Profile"
          className="header-image"
        />
        <div className="header-content">
          <h1 className="text-3xl font-bold">Nathan Cochran</h1>
          <p>Web Developer | Designer | Software Engineer</p>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
