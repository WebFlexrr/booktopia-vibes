
import React from 'react';
import SearchBar from '../ui/SearchBar';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="relative bg-pink-100 overflow-hidden pt-24 pb-16">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="text-lg font-medium mb-2">New & Trending</h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Best Books of 2022</h1>
          <p className="text-gray-600 mb-8">Discover the most popular books of the year selected by our editors</p>
          <Button className="bg-red-500 hover:bg-red-600 rounded-full px-8">Explore Now</Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10">
        <div className="w-16 h-16 bg-green-200 rounded-full opacity-70"></div>
      </div>
      <div className="absolute bottom-10 right-10">
        <div className="w-12 h-12 bg-red-200 rounded-full opacity-70"></div>
      </div>
      <div className="absolute top-1/4 right-1/5">
        <div className="w-20 h-20 bg-yellow-200 rounded-full opacity-50"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/5">
        <div className="w-14 h-14 bg-blue-200 rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
