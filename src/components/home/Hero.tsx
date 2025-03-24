
import React, { useState } from 'react';
import SearchBar from '../ui/SearchBar';
import HeroCarousel from './HeroCarousel';
import CarouselIndicators from './CarouselIndicators';
import BenefitsSection from './BenefitsSection';

const Hero: React.FC = () => {
  

  return (
    <section className="relative overflow-hidden">
      <HeroCarousel 
         
      />

      

      <BenefitsSection />
    </section>
  );
};

export default Hero;
