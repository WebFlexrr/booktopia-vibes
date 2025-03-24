
import React from 'react';
import { bookLaunches } from './HeroCarousel';

interface CarouselIndicatorsProps {
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ currentSlide, setCurrentSlide }) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {bookLaunches.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentSlide === index ? 'bg-primary w-6' : 'bg-gray-400'
          }`}
          onClick={() => {
            setCurrentSlide(index);
            // Find the right button to click
            if (index > currentSlide) {
              const nextBtn = document.querySelector('.carousel-next') as HTMLButtonElement;
              for (let i = 0; i < index - currentSlide; i++) {
                setTimeout(() => nextBtn?.click(), i * 100);
              }
            } else if (index < currentSlide) {
              const prevBtn = document.querySelector('.carousel-prev') as HTMLButtonElement;
              for (let i = 0; i < currentSlide - index; i++) {
                setTimeout(() => prevBtn?.click(), i * 100);
              }
            }
          }}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
