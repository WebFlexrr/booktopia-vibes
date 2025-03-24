
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookCard from '../components/ui/BookCard';
import { books } from '@/db/books';
import { motion } from 'framer-motion';
import { Percent, Tag, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Filter only books with original price (means they have a discount)
const discountedBooks = books.filter(book => book.originalPrice !== undefined)
  .map(book => ({
    ...book,
    discountPercentage: book.originalPrice ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100) : 0
  }))
  .sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));

const DealsPage = () => {
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

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-amber-50 to-orange-100 py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Deals & Offers</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Discover amazing discounts on bestselling books. Limited time offers you don't want to miss!
                </p>
                <Button size="lg" className="rounded-full">
                  Shop All Deals
                </Button>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute -top-8 -left-8 bg-red-500 text-white text-xl font-bold w-16 h-16 rounded-full flex items-center justify-center transform rotate-12">
                    50% OFF
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Special Deals" 
                    className="rounded-xl shadow-xl w-full max-w-md"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 text-yellow-400 opacity-20">
            <Tag size={100} />
          </div>
          <div className="absolute bottom-0 left-1/4 -mb-4 w-16 h-16 text-red-500 opacity-20">
            <Percent size={60} />
          </div>
        </div>

        {/* Today's Top Deals */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold mb-12 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeInAnimationVariants}
              custom={0}
            >
              Today's Top Deals 🔥
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {discountedBooks.slice(0, 5).map((book, index) => (
                <motion.div 
                  key={book.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimationVariants}
                  custom={index * 0.5 + 1}
                >
                  <BookCard {...book} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deals by Discount */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12">Shop by Discount</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { range: "Under 20% Off", color: "from-blue-100 to-blue-200", colorText: "text-blue-700" },
                { range: "20-40% Off", color: "from-green-100 to-green-200", colorText: "text-green-700" },
                { range: "Over 40% Off", color: "from-red-100 to-red-200", colorText: "text-red-700" }
              ].map((discount, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gradient-to-r ${discount.color} rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow`}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimationVariants}
                  custom={index + 1}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className={`text-2xl font-bold mb-2 ${discount.colorText}`}>{discount.range}</h3>
                  <p className="text-gray-700 mb-4">Amazing deals on selected titles</p>
                  <Button variant="outline" className="rounded-full">View Deals</Button>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {discountedBooks.slice(5, 15).map((book, index) => (
                <motion.div 
                  key={book.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimationVariants}
                  custom={index * 0.2 + 3}
                >
                  <BookCard {...book} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Limited Time Offers */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Limited Time Offers</h2>
              <div className="flex items-center text-lg font-semibold text-red-600 mt-4 md:mt-0">
                <span>Ends in:</span>
                <div className="ml-3 bg-white px-3 py-1 rounded-md shadow-sm">48:12:33</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {discountedBooks.slice(15, 20).map((book, index) => (
                <motion.div 
                  key={book.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimationVariants}
                  custom={index * 0.2 + 4}
                >
                  <BookCard {...book} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">Get Notified About Exclusive Deals</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Subscribe to our newsletter and never miss out on exclusive offers and discounts on your favorite books.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg flex-grow text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button variant="secondary" size="lg">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DealsPage;
