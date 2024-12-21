import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="name">Dr.Sailesh Kumar Samal</a>
      <i className="dropboxMenu" id="menu-icon" onClick={toggleMenu}>☰</i>

      <ul id="nav-links" className={isMenuOpen ? 'show' : ''}>
        <li className="list"><a href="#about">Home</a></li>
        <li className="list"><a href="#worksample">work</a></li>
        <li className="list"><a href="#packages">Packages</a></li>
        <li className="list"><a href="#contactsection">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;