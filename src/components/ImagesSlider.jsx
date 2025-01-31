import React, { useState, useEffect } from 'react';

const images = [
    '/images/iStock-1266573569.jpg',
    '/images/iStock-1306175040.jpg',
    '/images/pexels-heyho-6580414.jpg'
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
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                handleNext();
            } else if (event.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="slider-container">
            <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index + 1}`} />
                ))}
            </div>
            <button className="prev" onClick={handlePrev}>❮</button>
            <button className="next" onClick={handleNext}>❯</button>
        </div>
    );
};

export default ImagesSlider;