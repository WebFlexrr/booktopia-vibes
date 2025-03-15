
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { BookCard } from '../components/ui/BookCard';
import { BookOpen, Facebook, Twitter, Globe, Instagram } from 'lucide-react';

// Mock author data
const authorData = {
  id: '1',
  name: 'J.K. Rowling',
  image: '/placeholder.svg',
  bio: 'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author and philanthropist. She wrote Harry Potter, a seven-volume fantasy series published from 1997 to 2007.',
  birthdate: 'July 31, 1965',
  birthplace: 'Yate, Gloucestershire, England',
  website: 'https://www.jkrowling.com',
  socialMedia: {
    twitter: 'https://twitter.com/jk_rowling',
    facebook: 'https://facebook.com/JKRowling',
    instagram: 'https://instagram.com/jk_rowling',
  },
  books: [
    {
      id: '1',
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      price: 12.99,
      coverImage: '/placeholder.svg',
      rating: 4.8,
      discount: 10,
    },
    {
      id: '2',
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      price: 14.99,
      coverImage: '/placeholder.svg',
      rating: 4.7,
    },
    {
      id: '3',
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
      price: 14.99,
      coverImage: '/placeholder.svg',
      rating: 4.9,
      discount: 15,
    },
    {
      id: '4',
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
      price: 16.99,
      coverImage: '/placeholder.svg',
      rating: 4.8,
    },
    {
      id: '5',
      title: 'Harry Potter and the Order of the Phoenix',
      author: 'J.K. Rowling',
      price: 18.99,
      coverImage: '/placeholder.svg',
      rating: 4.7,
      discount: 5,
    },
    {
      id: '6',
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J.K. Rowling',
      price: 18.99,
      coverImage: '/placeholder.svg',
      rating: 4.8,
    },
  ],
};

const AuthorsPage = () => {
  const { id } = useParams();
  // In a real app, you would fetch author data based on the ID
  // const author = useAuthor(id);
  const author = authorData; // Using mock data for now

  if (!author) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Author Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The author you're looking for doesn't exist or has been removed.
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
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted flex-shrink-0 mx-auto md:mx-0">
                <img 
                  src={author.image} 
                  alt={author.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-semibold">{author.name}</h1>
                
                <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    <BookOpen size={14} />
                    <span>{author.books.length} Books</span>
                  </div>
                  
                  {author.birthdate && (
                    <div className="text-sm bg-muted px-3 py-1 rounded-full">
                      Born: {author.birthdate}
                    </div>
                  )}
                  
                  {author.birthplace && (
                    <div className="text-sm bg-muted px-3 py-1 rounded-full">
                      {author.birthplace}
                    </div>
                  )}
                </div>
                
                <div className="flex gap-3 mt-6 justify-center md:justify-start">
                  {author.socialMedia?.twitter && (
                    <a 
                      href={author.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  
                  {author.socialMedia?.facebook && (
                    <a 
                      href={author.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                  )}
                  
                  {author.socialMedia?.instagram && (
                    <a 
                      href={author.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  
                  {author.website && (
                    <a 
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Globe size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="mt-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-xl font-medium mb-3">About the Author</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {author.bio}
              </p>
            </div>
          </div>
          
          <Separator className="animate-slide-up" style={{ animationDelay: '150ms' }} />
          
          <div className="py-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-semibold mb-6">Books by {author.name}</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {author.books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorsPage;
