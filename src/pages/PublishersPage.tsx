
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import BookCard from '../components/ui/BookCard';
import { BookOpen, Building, MapPin, Phone, Mail, Globe } from 'lucide-react';

// Mock publisher data
const publisherData = {
  id: '1',
  name: 'Penguin Random House',
  logo: '/placeholder.svg',
  description: 'Penguin Random House LLC is an American multinational conglomerate publishing company formed in 2013 from the merger of Penguin Group and Random House.',
  founded: 'July 1, 2013',
  headquarters: 'New York City, New York, United States',
  website: 'https://www.penguinrandomhouse.com',
  email: 'info@penguinrandomhouse.com',
  phone: '+1 (212) 782-9000',
  books: [
    {
      id: '1',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      price: 14.99,
      coverImage: '/placeholder.svg',
      rating: 4.5,
      discount: 10,
    },
    {
      id: '2',
      title: 'Klara and the Sun',
      author: 'Kazuo Ishiguro',
      price: 16.99,
      coverImage: '/placeholder.svg',
      rating: 4.6,
    },
    {
      id: '3',
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 15.99,
      coverImage: '/placeholder.svg',
      rating: 4.8,
      discount: 15,
    },
    {
      id: '4',
      title: 'The Lincoln Highway',
      author: 'Amor Towles',
      price: 13.99,
      coverImage: '/placeholder.svg',
      rating: 4.4,
    },
    {
      id: '5',
      title: 'Cloud Cuckoo Land',
      author: 'Anthony Doerr',
      price: 18.99,
      coverImage: '/placeholder.svg',
      rating: 4.3,
      discount: 5,
    },
    {
      id: '6',
      title: 'Beautiful World, Where Are You',
      author: 'Sally Rooney',
      price: 12.99,
      coverImage: '/placeholder.svg',
      rating: 4.1,
    },
    {
      id: '7',
      title: 'The Last Thing He Told Me',
      author: 'Laura Dave',
      price: 11.99,
      coverImage: '/placeholder.svg',
      rating: 4.2,
    },
    {
      id: '8',
      title: 'The Four Winds',
      author: 'Kristin Hannah',
      price: 14.99,
      coverImage: '/placeholder.svg',
      rating: 4.7,
      discount: 20,
    },
  ],
};

const PublishersPage = () => {
  const { id } = useParams();
  // In a real app, you would fetch publisher data based on the ID
  // const publisher = usePublisher(id);
  const publisher = publisherData; // Using mock data for now

  if (!publisher) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Publisher Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The publisher you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start animate-slide-up">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-card rounded-xl p-4 flex items-center justify-center overflow-hidden flex-shrink-0 mx-auto md:mx-0 border border-border">
                <img 
                  src={publisher.logo} 
                  alt={publisher.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-semibold">{publisher.name}</h1>
                
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <BookOpen size={14} />
                    <span>{publisher.books.length} Books</span>
                  </div>
                  
                  {publisher.founded && (
                    <div className="flex items-center gap-1.5 text-sm bg-muted px-3 py-1 rounded-full">
                      <Building size={14} />
                      <span>Founded: {publisher.founded}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-4 space-y-2">
                  {publisher.headquarters && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                      <MapPin size={16} className="flex-shrink-0" />
                      <span>{publisher.headquarters}</span>
                    </div>
                  )}
                  
                  {publisher.phone && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                      <Phone size={16} className="flex-shrink-0" />
                      <span>{publisher.phone}</span>
                    </div>
                  )}
                  
                  {publisher.email && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                      <Mail size={16} className="flex-shrink-0" />
                      <a href={`mailto:${publisher.email}`} className="hover:text-primary transition-colors">
                        {publisher.email}
                      </a>
                    </div>
                  )}
                  
                  {publisher.website && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center md:justify-start">
                      <Globe size={16} className="flex-shrink-0" />
                      <a href={publisher.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        {publisher.website.replace(/^https?:\/\//, '')}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-xl font-medium mb-3">About the Publisher</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {publisher.description}
              </p>
            </div>
          </div>
          
          <Separator className="animate-slide-up" style={{ animationDelay: '150ms' }} />
          
          <div className="py-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-semibold mb-6">Books published by {publisher.name}</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {publisher.books.map((book) => (
                <BookCard 
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.coverImage}
                  price={book.price}
                  originalPrice={book.discount ? (book.price * 100) / (100 - book.discount) : undefined}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublishersPage;
