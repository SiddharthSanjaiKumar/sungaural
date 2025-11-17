import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Sungaural Logo" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
          <span className={menuOpen ? 'hamburger-bar open' : 'hamburger-bar'}></span>
        </button>
        {menuOpen && (
          <div className="mobile-nav-menu">
            <a href="#hero" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#products" className="nav-link" onClick={() => setMenuOpen(false)}>Products</a>
            <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};
       

export default Header;