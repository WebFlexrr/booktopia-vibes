
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCard from '../ui/BookCard';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface BookCollectionProps {
  title: string;
  books: Book[];
  link?: {
    text: string;
    url: string;
  };
}

const BookCollection: React.FC<BookCollectionProps> = ({ title, books, link }) => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="flex items-end justify-between mb-10">
          <h2 className="section-heading">{title}</h2>
          
          {link && (
            <Link 
              to={link.url} 
              className="flex items-center text-sm font-medium text-primary hover:opacity-80 transition-opacity"
            >
              {link.text}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book, index) => (
            <div key={book.id} style={{ animationDelay: `${index * 50}ms` }}>
              <BookCard {...book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCollection;
