import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo.png" alt="Sigma Logo" className="footer-logo-img" />
            <span className="footer-logo-name">Sigma Code</span>
          </div>
          <p className="footer-tagline">Minimal. Modern. Meaningful</p>
        </div>

        <div className="footer-right">
          <div className="footer-box">
            <h3 className="footer-title">Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-box">
            <h3 className="footer-title">Contact</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <label>Email</label>
                <p>
                  <a href="mailto:sigmacode.design@gmail.com">
                    sigmacode.design@gmail.com
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <label>Phone</label>
                <p>
                  <a href="tel:+919023992728">+91 90239 92728</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Sigma Code. All Rights Reserved.</p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/sigmacode.design" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.linkedin.com/in/sigma-code-636328381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="ri-linkedin-line"></i>
          </a>
          <a href="https://www.facebook.com/share/17hNyApxbT/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <i className="ri-facebook-line"></i>
          </a>
          <a href="https://wa.me/919023992728" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="ri-whatsapp-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
