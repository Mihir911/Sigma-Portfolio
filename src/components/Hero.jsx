import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>
        We craft design, tech, and<br />ideas into standout brands.
      </h1>

      <div className="hero-content">
        <p>
          At Sigma Code, we transform your ideas into seamless, high-impact digital experiences —
          crafted to look stunning, perform flawlessly, and drive real growth for your business.
        </p>
        <a href="#work">
          <button className="cta-btn">Our Projects</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
