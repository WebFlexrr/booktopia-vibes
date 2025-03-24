import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { authors } from '../db/authors';
import { BookOpen, Search, Tag, BookText, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

// Define genres for browsing
const genres = [
  "Fantasy", "Mystery", "Sci-Fi", "Romance", "Horror", "Literary Fiction", 
  "Historical Fiction", "Biography", "Classic Literature", "Magical Realism", 
  "Young Adult", "Thriller"
];

const AuthorsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Get the genre from URL params
  const genreParam = searchParams.get('genre');
  const [selectedGenre, setSelectedGenre] = useState(genreParam || '');
  
  // Update genre filter when URL param changes
  useEffect(() => {
    if (genreParam) {
      setSelectedGenre(genreParam);
    } else {
      setSelectedGenre('');
    }
  }, [genreParam]);
  
  // Set URL params when genre is selected
  const handleGenreSelect = (genre: string) => {
    if (selectedGenre === genre) {
      // If clicking the same genre, clear the filter
      setSelectedGenre('');
      searchParams.delete('genre');
    } else {
      // Otherwise set the new genre
      setSelectedGenre(genre);
      searchParams.set('genre', genre);
    }
    setSearchParams(searchParams);
  };
  
  // Filter authors based on search term and selected genre
  const filteredAuthors = authors.filter(author => 
    (searchTerm === '' || 
      author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.genre.toLowerCase().includes(searchTerm.toLowerCase())
    ) &&
    (selectedGenre === '' || 
      author.genre.toLowerCase() === selectedGenre.toLowerCase())
  );

  // Animation variants
  const fadeInAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl mb-16">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 h-64 md:h-80">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1490633874781-1c63cc424610?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <motion.div 
                  className="max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    Meet Our Authors
                  </h1>
                  <p className="text-lg md:text-xl text-white drop-shadow-md mb-6">
                    Discover the creative minds behind your favorite books.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Browse by Genre */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <Tag className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Browse by Genre</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {genres.map((genre, index) => (
                <motion.button
                  key={genre}
                  className={`p-3 rounded-lg text-sm font-medium transition-all hover:bg-primary/5 ${
                    selectedGenre === genre 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary/50 text-foreground'
                  }`}
                  onClick={() => handleGenreSelect(genre)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {genre}
                </motion.button>
              ))}
            </div>
            
            {selectedGenre && (
              <div className="mt-4 flex items-center">
                <span className="text-sm text-muted-foreground">
                  Filtering by: <span className="font-medium text-primary">{selectedGenre}</span>
                </span>
                <Button 
                  variant="link" 
                  size="sm"
                  className="text-primary ml-2 p-0 h-auto"
                  onClick={() => {
                    setSelectedGenre('');
                    searchParams.delete('genre');
                    setSearchParams(searchParams);
                  }}
                >
                  Clear filter
                </Button>
              </div>
            )}
          </motion.div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                placeholder="Search authors by name or genre..."
                className="pl-10 py-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredAuthors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in">
              {filteredAuthors.map((author, index) => (
                <motion.div
                  key={author.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInAnimationVariants}
                  custom={index}
                >
                  <Link to={`/authors/${author.id}`} className="group">
                    <Card className="overflow-hidden hover-scale transition-all duration-300 h-full hover:shadow-md">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={author.image} 
                          alt={author.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{author.name}</h3>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                          {author.genre}
                        </span>
                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                          {author.bio}
                        </p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen size={16} className="mr-1.5" />
                          <span>{author.books} books</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookText size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No authors found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria.
              </p>
              {(searchTerm || selectedGenre) && (
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedGenre('');
                    searchParams.delete('genre');
                    setSearchParams(searchParams);
                  }}
                >
                  Clear all filters
                </Button>
              )}
            </div>
          )}

          {/* Author Stats */}
          <div className="mt-20 bg-secondary/30 rounded-xl p-8">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="text-center">
                <Users className="mx-auto mb-2 text-primary" size={32} />
                <h3 className="text-3xl font-bold mb-1">{authors.length}</h3>
                <p className="text-muted-foreground">Authors</p>
              </div>
              <div className="text-center">
                <BookOpen className="mx-auto mb-2 text-primary" size={32} />
                <h3 className="text-3xl font-bold mb-1">
                  {authors.reduce((sum, author) => sum + author.books, 0)}
                </h3>
                <p className="text-muted-foreground">Total Books</p>
              </div>
              <div className="text-center">
                <Tag className="mx-auto mb-2 text-primary" size={32} />
                <h3 className="text-3xl font-bold mb-1">{genres.length}</h3>
                <p className="text-muted-foreground">Genres</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorsPage;
