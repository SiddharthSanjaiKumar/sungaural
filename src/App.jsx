
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Handle header background change on scroll
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.15)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.boxShadow = 'none';
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </>
  );
}

export default App
