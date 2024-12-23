import React, { useState } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="name">Dr.S.K Samal</a>
      <i className="dropboxMenu" id="menu-icon" onClick={toggleMenu}>☰</i>

      <ul id="nav-links" className={isMenuOpen ? 'show' : ''}>
        <li className="list"><Link to="/">Home</Link></li>
        <li className="list"><Link to="/journey">Journey</Link></li>
        <li className="list"><Link to="/project">Project</Link></li>
        <li className="list"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;