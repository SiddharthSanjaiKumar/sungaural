import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3>Get In Touch</h3>
        <p>Ready to start your skincare journey? We're here to help you find the perfect products for your skin.</p>
        <p>Email: sungauralskincare@gmail.com | Phone: (+91) 75740-03033</p>
        <div className="social-links">
          <a href="#" title="Facebook">📘</a>
          <a href="#" title="Instagram">📷</a>
          <a href="#" title="Twitter">🐦</a>
          <a href="#" title="TikTok">🎵</a>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} Sungaural Skincare. All rights reserved. Crafted with ❤️ for beautiful skin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;