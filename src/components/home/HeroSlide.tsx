
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroSlideProps {
  book: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    image: string;
    decoration: string | null;
    ctaText: string;
    link: string;
  };
}

const fadeInAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

const HeroSlide: React.FC<HeroSlideProps> = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className={`relative ${book.bgColor} min-h-[85vh] sm:min-h-[80vh] flex items-center overflow-hidden`}>
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        {book.id === '1' && book.decoration && (
          <>
            {/* <motion.img 
              src={book.decoration}
              alt="Decoration" 
              className="absolute top-20 left-10 w-20 h-20"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            /> */}
            <motion.div 
              className="absolute top-1/4 right-20 w-16 h-16"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-emerald-400">
                <path fill="currentColor" d="M34.2,-58.1C42.6,-52.8,46.9,-40.6,51.1,-29.5C55.3,-18.4,59.4,-9.2,58,-0.8C56.6,7.6,49.8,15.1,44.2,22.9C38.7,30.6,34.3,38.5,27.4,44.1C20.4,49.8,10.2,53.2,-0.5,54C-11.1,54.8,-22.3,52.9,-31.7,47.8C-41.1,42.7,-48.8,34.4,-55.6,24.3C-62.4,14.3,-68.4,2.4,-66.7,-8.3C-64.9,-19,-55.4,-28.5,-45.9,-35.3C-36.3,-42.1,-26.7,-46.1,-17.4,-50.9C-8.2,-55.7,0.7,-61.3,10.6,-63.8C20.6,-66.3,25.8,-63.3,34.2,-58.1Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
            <motion.div 
              className="absolute bottom-20 right-[30%] w-32 h-32"
              animate={{ 
                rotate: -360,
                opacity: [0.4, 0.7, 0.4] 
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-rose-300">
                <path fill="currentColor" d="M47.7,-73.2C58.9,-69.3,63.2,-49.8,69.1,-32.5C75,-15.3,82.5,-0.3,81.8,14.5C81,29.3,72,43.9,60.9,56.8C49.7,69.8,36.5,81.1,20.2,86.6C3.9,92.1,-15.6,91.7,-30.1,83.9C-44.7,76.1,-54.2,60.9,-61.9,45.9C-69.7,30.9,-75.6,15.5,-75.9,-0.2C-76.2,-15.8,-70.8,-31.7,-61.2,-44.7C-51.7,-57.8,-37.9,-68.1,-23.5,-70.1C-9.1,-72.1,5.8,-65.8,19.5,-63.7C33.2,-61.5,36.6,-77.1,47.7,-73.2Z" transform="translate(100 100)" />
              </svg>
            </motion.div>
          </>
        )}
        
        {/* Add abstract shapes for all slides */}
        <motion.div 
          className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-1/4 -right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 relative z-10">
        {/* Text content */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          {/* <motion.span 
            className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground mb-6"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeInAnimationVariants}
          >
            BEST BOOKSHELF IN TOWN
          </motion.span> */}
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight mb-4"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeInAnimationVariants}
          >
            {book.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg mb-8 font-medium"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeInAnimationVariants}
          >
            {book.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-muted-foreground mb-8 max-w-md"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeInAnimationVariants}
          >
            {book.description}
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeInAnimationVariants}
          >
            <Button 
              onClick={() => navigate(book.link)}
              className="px-8 py-6 rounded-full text-base"
            >
              {book.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
        
        {/* Book image */}
        <motion.div 
          className="flex items-center justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <motion.div 
            className="relative w-[260px] h-[400px] shadow-2xl rounded-lg overflow-hidden"
            whileHover={{ 
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            animate={{
              rotate: 6,
              y: [0, -5, 0]
            }}
            transition={{
              rotate: { duration: 0.5 },
              y: { repeat: Infinity, duration: 2, repeatType: "reverse" }
            }}
          >
            <img 
              src={book.image} 
              alt={book.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSlide;
