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

    // Duplicate the first image at the end for seamless looping
    const sliderImages = [...images, images[0]];

    const handleNext = () => {
        if (isTransitioning) return; // Prevent multiple clicks during transition
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    };

    const handlePrev = () => {
        if (isTransitioning) return; // Prevent multiple clicks during transition
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
        );
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);

        // If we're at the last image (the duplicated one), reset to the first image without animation
        if (currentIndex === sliderImages.length - 1) {
            setTimeout(() => {
                setCurrentIndex(0);
            }, 0); // Reset immediately after transition ends
        }
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
                {sliderImages.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default ImagesSlider;