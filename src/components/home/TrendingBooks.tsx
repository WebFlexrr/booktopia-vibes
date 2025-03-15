
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Mock data for trending books
const trendingBooks = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'Fiction',
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    category: 'Self-Help',
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    category: 'Sci-Fi',
  },
];

const TrendingBooks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading text-center mb-12">Trending This Week</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingBooks.map((book, index) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <div 
                className="relative overflow-hidden rounded-2xl shadow-lg hover-scale h-[500px] group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm mb-3">
                    {book.category}
                  </span>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-white/90 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-white/80">by {book.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingBooks;
