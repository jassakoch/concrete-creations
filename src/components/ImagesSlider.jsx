import React, { useState } from 'react';
import '../index.css';

const images = [
  '/images/iStock-1266573569.jpg',
  '/images/iStock-1306175040.jpg',
  '/images/pexels-heyho-6580414.jpg',
  '/images/pexels-heyho-6580385.jpg',
  '/images/pexels-heyho-8089084.jpg'
];

const ImagesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Loop back to the last image
  };

  const handleTransitionEnd = () => {
    // Reset transitioning flag after transition completes
    setIsTransitioning(false);
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Concrete Countertop ${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={handlePrev}>❮</button>
      <button className="next" onClick={handleNext}>❯</button>
    </div>
  );
};

export default ImagesSlider;
