import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/Dr_Sailesh_Samal_Portfolio" className="name">Dr.S.K Samal</a>
      <i className="dropboxMenu" id="menu-icon" onClick={toggleMenu}>☰</i>

      <ul id="nav-links" className={isMenuOpen ? 'show' : ''}>
        <li className="list"><Link to="/Dr_Sailesh_Samal_Portfolio/updates">Updates</Link></li>
        <li className="list"><Link to="/Dr_Sailesh_Samal_Portfolio/journey">Journey</Link></li>
        <li className="list"><Link to="/Dr_Sailesh_Samal_Portfolio/project">Project</Link></li>
        <li className="list"><Link to="/Dr_Sailesh_Samal_Portfolio/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;