import React from 'react';
import Logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-container">
          <img src={Logo} alt="Sungaural Logo" className="logo-image" />
        
        </div>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};
       

export default Header;