import React, { useState, useEffect } from 'react';

const images = [
    '/images/iStock-1266573569.jpg',
    '/images/iStock-1306175040.jpg',
    '/images/pexels-heyho-6580414.jpg',
    '/images/pexels-heyho-6580385.jpg',
    '/images/pexels-heyho-8089084.jpg'
];

const ImagesSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "transform 0.5s ease-in-out" }}>
                {images.concat(images[0]).map((src, index) => ( // Duplicates first image for seamless loop effect
                    <img key={index} src={src} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default ImagesSlider;
