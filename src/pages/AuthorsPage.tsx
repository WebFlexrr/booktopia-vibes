
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { authors } from '../db/authors';
import { BookOpen, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '@/components/ui/input';

const AuthorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter authors based on search term
  const filteredAuthors = authors.filter(author => 
    author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    Meet Our Authors
                  </h1>
                  <p className="text-lg md:text-xl text-white drop-shadow-md mb-6">
                    Discover the creative minds behind your favorite books.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 animate-fade-in">
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

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
            {filteredAuthors.map((author, index) => (
              <Link 
                to={`/authors/${author.id}`} 
                key={author.id}
                className="group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
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
            ))}
          </div>

          {/* Genres Section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="section-heading">Browse Authors by Genre</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Fantasy", "Mystery", "Sci-Fi", "Romance", "Horror", "Literary Fiction", "Historical Fiction", "Biography", "Classic Literature", "Magical Realism", "Young Adult", "Thriller"].map((genre, index) => (
                <Card 
                  key={genre} 
                  className="hover:bg-primary/5 transition-colors cursor-pointer hover-scale"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <span className="text-sm font-medium">{genre}</span>
                  </CardContent>
                </Card>
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
