
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import HeroSlide from './HeroSlide';

// Featured book launch data
export const bookLaunches = [
  {
    id: '1',
    title: 'The Best Books of 2023',
    subtitle: 'Limited Time Only. While Supplies Last!',
    description: 'Discover award-winning stories that captivated readers globally',
    bgColor: 'bg-gradient-to-r from-purple-100 to-pink-100',
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
    bgColor: 'bg-gradient-to-r from-cyan-50 to-blue-100',
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
    bgColor: 'bg-gradient-to-r from-amber-50 to-orange-100',
    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    decoration: null,
    ctaText: 'Shop Thrillers',
    link: '/category/mystery'
  }
];

interface HeroCarouselProps {
  setCurrentSlide: (index: number) => void;
  currentSlide: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ setCurrentSlide, currentSlide }) => {
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    // Set up autoplay for carousel
    const interval = autoplay ? setInterval(() => {
      const nextSlide = (currentSlide + 1) % bookLaunches.length;
      setCurrentSlide(nextSlide);
      const nextBtn = document.querySelector('.carousel-next') as HTMLButtonElement;
      if (nextBtn) nextBtn.click();
    }, 5000) : null;
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, setCurrentSlide, currentSlide]);

  return (
    <Carousel 
      className="w-full" 
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <CarouselContent>
        {bookLaunches.map((book) => (
          <CarouselItem key={book.id}>
            <HeroSlide book={book} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 carousel-prev" />
      <CarouselNext className="right-4 carousel-next" />
    </Carousel>
  );
};

export default HeroCarousel;
