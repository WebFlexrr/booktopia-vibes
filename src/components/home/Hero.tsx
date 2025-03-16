
import React, { useEffect, useState } from 'react';
import SearchBar from '../ui/SearchBar';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Featured book launch data
const bookLaunches = [
  {
    id: '1',
    title: 'The Best Books of 2023',
    subtitle: 'Limited Time Only. While Supplies Last!',
    description: 'Discover award-winning stories that captivated readers globally',
    bgColor: 'bg-gradient-to-r from-pink-100 to-rose-100',
    image: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    decoration: 'public/lovable-uploads/7fbd2492-cfcd-4323-a813-52001a4920b6.png',
    ctaText: 'Shop Now',
    link: '/bestsellers'
  },
  {
    id: '2',
    title: 'Summer Reading Collection',
    subtitle: 'Perfect Beach Companions',
    description: 'Escape with our hand-picked selection of summer reads',
    bgColor: 'bg-gradient-to-r from-blue-50 to-sky-100',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    decoration: null,
    ctaText: 'Explore Collection',
    link: '/category/summer'
  },
  {
    id: '3',
    title: 'New Mystery Thrillers',
    subtitle: 'The Most Anticipated Releases',
    description: 'Edge-of-your-seat page turners from top authors',
    bgColor: 'bg-gradient-to-r from-purple-50 to-indigo-100',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    decoration: null,
    ctaText: 'Shop Thrillers',
    link: '/category/mystery'
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Set up autoplay for carousel
    const interval = autoplay ? setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bookLaunches.length);
      const nextBtn = document.querySelector('.carousel-next') as HTMLButtonElement;
      if (nextBtn) nextBtn.click();
    }, 5000) : null;
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <section className="relative overflow-hidden">
      <Carousel 
        className="w-full" 
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <CarouselContent>
          {bookLaunches.map((book) => (
            <CarouselItem key={book.id}>
              <div className={`relative ${book.bgColor} min-h-[85vh] sm:min-h-[80vh] flex items-center overflow-hidden`}>
                {/* Background decoration elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {book.id === '1' && book.decoration && (
                    <>
                      <img 
                        src={book.decoration}
                        alt="Decoration" 
                        className="absolute top-20 left-10 w-20 h-20 animate-bounce"
                        style={{ animationDuration: '3s' }}
                      />
                      <div className="absolute top-1/4 right-20 w-16 h-16">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-green-400">
                          <path fill="currentColor" d="M34.2,-58.1C42.6,-52.8,46.9,-40.6,51.1,-29.5C55.3,-18.4,59.4,-9.2,58,-0.8C56.6,7.6,49.8,15.1,44.2,22.9C38.7,30.6,34.3,38.5,27.4,44.1C20.4,49.8,10.2,53.2,-0.5,54C-11.1,54.8,-22.3,52.9,-31.7,47.8C-41.1,42.7,-48.8,34.4,-55.6,24.3C-62.4,14.3,-68.4,2.4,-66.7,-8.3C-64.9,-19,-55.4,-28.5,-45.9,-35.3C-36.3,-42.1,-26.7,-46.1,-17.4,-50.9C-8.2,-55.7,0.7,-61.3,10.6,-63.8C20.6,-66.3,25.8,-63.3,34.2,-58.1Z" transform="translate(100 100)" />
                        </svg>
                      </div>
                      <div className="absolute bottom-20 right-[30%] w-32 h-32">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-red-300 opacity-60">
                          <path fill="currentColor" d="M47.7,-73.2C58.9,-69.3,63.2,-49.8,69.1,-32.5C75,-15.3,82.5,-0.3,81.8,14.5C81,29.3,72,43.9,60.9,56.8C49.7,69.8,36.5,81.1,20.2,86.6C3.9,92.1,-15.6,91.7,-30.1,83.9C-44.7,76.1,-54.2,60.9,-61.9,45.9C-69.7,30.9,-75.6,15.5,-75.9,-0.2C-76.2,-15.8,-70.8,-31.7,-61.2,-44.7C-51.7,-57.8,-37.9,-68.1,-23.5,-70.1C-9.1,-72.1,5.8,-65.8,19.5,-63.7C33.2,-61.5,36.6,-77.1,47.7,-73.2Z" transform="translate(100 100)" />
                        </svg>
                      </div>
                    </>
                  )}
                  
                  {/* Add abstract shapes for all slides */}
                  <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute top-1/4 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                </div>
                
                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 relative z-10">
                  {/* Text content */}
                  <div className="flex flex-col justify-center order-2 lg:order-1 animate-slide-up">
                    <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-6">
                      BEST BOOKSHELF IN TOWN
                    </span>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-4">
                      {book.title}
                    </h1>
                    
                    <p className="text-lg mb-8 font-medium">{book.subtitle}</p>
                    <p className="text-muted-foreground mb-8 max-w-md">{book.description}</p>
                    
                    <div>
                      <Button 
                        onClick={() => navigate(book.link)}
                        className="px-8 py-6 rounded-full text-base"
                      >
                        {book.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Book image */}
                  <div className="flex items-center justify-center order-1 lg:order-2">
                    <div className="relative w-[260px] h-[400px] shadow-2xl transition-all transform rotate-6 hover:rotate-0 duration-300 rounded-lg overflow-hidden">
                      <img 
                        src={book.image} 
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 carousel-prev" />
        <CarouselNext className="right-4 carousel-next" />
      </Carousel>

      {/* Carousel indicators */}
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

      {/* Benefits section */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
          <div className="flex items-center p-4 rounded-lg hover:bg-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Best Prices & Offers</h3>
              <p className="text-sm text-muted-foreground">On orders $50 or more</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 rounded-lg hover:bg-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Free Delivery</h3>
              <p className="text-sm text-muted-foreground">24/7 amazing services</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 rounded-lg hover:bg-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Great Daily Deal</h3>
              <p className="text-sm text-muted-foreground">When you sign up</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 rounded-lg hover:bg-secondary/30 transition-colors">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">Within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
