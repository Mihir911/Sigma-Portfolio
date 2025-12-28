import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import './Services.css';

import webDeveloper from '../assets/Web developer.json';
import uiUxDesign from '../assets/Creative 3D Visual Animation - Website Development.json';
import digitalMarketing from '../assets/Google Advertisement.json';
import graphicDesign from '../assets/Graphic Design process.json';
import ecommerce from '../assets/online shopping delivery.json';
import creativeDesign from '../assets/design thinking.json';
import socialMedia from '../assets/Social media marketing.json';
import threeDVisual from '../assets/360 VTS Logo.json';

const services = [
  { animationData: webDeveloper, title: 'Website Development' },
  { animationData: uiUxDesign, title: 'UI/UX Design' },
  { animationData: digitalMarketing, title: 'Digital Marketing' },
  { animationData: graphicDesign, title: 'Graphic Design' },
  { animationData: ecommerce, title: 'E-Commerce Website' },
  { animationData: creativeDesign, title: 'Creative Design Studio' },
  { animationData: socialMedia, title: 'Social Post & Reel Design' },
  { animationData: threeDVisual, title: '3D Visual' },
];

const Services = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const visibleCards = 2;

  useEffect(() => {
    const calculateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 20); // width + margin
      }
    };

    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, []);

  const slideToNext = () => {
    setCurrentPosition(prevPosition => {
      const newPosition = prevPosition + visibleCards;
      if (trackRef.current) {
        trackRef.current.style.transition = 'transform 0.8s ease-in-out';
        trackRef.current.style.transform = `translateX(-${newPosition * cardWidth}px)`;

        if (newPosition >= services.length) {
          setTimeout(() => {
            if (trackRef.current) {
              trackRef.current.style.transition = 'none';
              trackRef.current.style.transform = 'translateX(0)';
            }
            setCurrentPosition(0);
          }, 800);
        }
      }
      return newPosition >= services.length ? 0 : newPosition;
    });
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(slideToNext, 4000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (cardWidth > 0) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [cardWidth]);

  const duplicatedServices = [...services, ...services.slice(0, visibleCards)];

  return (
    <div className="cards-carousel" onMouseEnter={stopAutoSlide} onMouseLeave={startAutoSlide}>
      <div className="cards-track" ref={trackRef}>
        {duplicatedServices.map((service, index) => (
          <div className="card" key={index} ref={index === 0 ? cardRef : null}>
            <div className="card-thumb">
              <Lottie animationData={service.animationData} loop={true} />
            </div>
            <div className="card-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
