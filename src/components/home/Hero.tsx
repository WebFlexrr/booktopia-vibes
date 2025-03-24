
import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import HeroCarousel from './HeroCarousel';
import CarouselIndicators from './CarouselIndicators';
import BenefitsSection from './BenefitsSection';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <HeroCarousel 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />

      <CarouselIndicators 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
      />

      <BenefitsSection />
    </section>
  );
};

export default Hero;
