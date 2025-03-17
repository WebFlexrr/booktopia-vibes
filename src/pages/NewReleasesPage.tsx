
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookCard from '../components/ui/BookCard';
import { books,  } from '../db/books';
import { ChevronRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const NewReleasesPage = () => {
  // Mock release dates for demonstration
  const releaseDates = [
    "2023-05-15",
    "2023-06-02",
    "2023-06-10",
    "2023-06-15",
    "2023-06-20",
  ];

  // Adding release dates to books for the demo
  const booksWithDates = books.map((book, index) => ({
    ...book,
    releaseDate: releaseDates[index % releaseDates.length]
  }));

  const newReleases = books.filter(book=>book.isNew===true)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl mb-16">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-500 h-64 md:h-80">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    New Releases
                  </h1>
                  <p className="text-lg md:text-xl text-white drop-shadow-md mb-6">
                    The latest books hitting our shelves this month.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured New Release */}
          <div className="mb-16 animate-fade-in">
            <h2 className="section-heading">Featured New Release</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center">
                <div className="flex justify-center">
                  <div className="relative w-56 h-80">
                    <div className="absolute inset-0 w-full h-full bg-indigo-200 rounded-lg transform rotate-6 scale-95"></div>
                    <div className="absolute inset-0 w-full h-full bg-purple-200 rounded-lg transform -rotate-3 scale-97"></div>
                    <img 
                      src={newReleases[0].cover} 
                      alt={newReleases[0].title} 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 z-10"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                    Just Released
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{newReleases[0].title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">by {newReleases[0].author}</p>
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(newReleases[0].rating) ? 'text-indigo-500 fill-indigo-500' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-muted-foreground">{newReleases[0].rating}</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold mb-4">${newReleases[0].price.toFixed(2)}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to={`/book/${newReleases[0].id}`}
                      className="px-6 py-3 bg-indigo-600 text-white rounded-full shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 active:shadow-sm"
                    >
                      View Details
                    </Link>
                    <button className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full shadow-sm transition-all duration-300 ease-out hover:bg-purple-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Releases Grid */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="section-heading">All New Releases</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {newReleases.map((book, index) => (
                <div key={book.id} style={{ animationDelay: `${index * 50}ms` }}>
                  <BookCard {...book} />
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Releases */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="section-heading">Release Calendar</h2>
            <div className="bg-white rounded-xl shadow-sm border p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Release Date</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {booksWithDates.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">
                        {new Date(book.releaseDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </TableCell>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>${book.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <Link 
                          to={`/book/${book.id}`}
                          className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-end"
                        >
                          View <ChevronRight size={16} />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewReleasesPage;
