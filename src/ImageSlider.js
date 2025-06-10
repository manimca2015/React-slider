import React, { useState } from 'react';
import './ImageSlider.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow" onClick={prevSlide}>&#10094;</button>

      <div className="slider-wrapper">
        {images.map((img, index) => (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={process.env.PUBLIC_URL + img} alt={`Slide ${index}`} className="slide-image" />}
          </div>
        ))}
      </div>

      <button className="arrow right-arrow" onClick={nextSlide}>&#10095;</button>
    </div>
  );
}
