
import React from 'react';
import SearchBar from '../ui/SearchBar';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")',
          transform: 'translateZ(0)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-6 animate-slide-up">Discover your next favorite book</span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
            A <span className="text-primary">universe</span> of stories waiting to be explored
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            From bestsellers to hidden gems, find the perfect book that speaks to your soul and ignites your imagination.
          </p>
          
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <SearchBar fullWidth />
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
            <div>
              <p className="text-3xl font-semibold">50K+</p>
              <p className="text-muted-foreground text-sm">Books</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">120+</p>
              <p className="text-muted-foreground text-sm">Authors</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">10K+</p>
              <p className="text-muted-foreground text-sm">Happy Readers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
