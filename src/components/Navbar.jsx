import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="logo-container">
          <div className="logo"><img src="/logo.png" alt="Sigma Code Logo" /></div>
          <span className="logo-text">SIGMA CODE</span>
        </div>

        <div className="nav-center" id="navCenter">
          <div className="nav-circle">
            <a href="#" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Projects</a>
            <a href="#faq">Faq</a>
          </div>
        </div>

        <a href="#footer">
          <button className="nav-btn">Contact</button>
        </a>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} id="hamburger" onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} id="mobileMenu">
        <div className="mobile-nav">
          <a href="#" className="active" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#faq" onClick={closeMenu}>Faq</a>
          <button className="mobile-btn" onClick={closeMenu}>Contact</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;