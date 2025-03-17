
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookCard from '../components/ui/BookCard';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { books } from '@/db/books';

const BestSellersPage = () => {
  // Create categories from bestsellers data
  const categories = ['All', 'Fiction', 'Non-Fiction', 'Mystery', 'Classic'];
  const bestsellers = books.filter(book=>book.isBestseller===true)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl mb-16">
            <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-64 md:h-80">
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <div className="max-w-2xl">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">
                    Bestselling Books
                  </h1>
                  <p className="text-lg md:text-xl text-white drop-shadow-md mb-6">
                    Discover the most popular books that readers can't put down.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Bestseller */}
          <div className="mb-16 animate-fade-in">
            <h2 className="section-heading">Featured Bestseller</h2>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl overflow-hidden shadow-md">
              <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8 items-center">
                <div className="flex justify-center">
                  <div className="relative w-56 h-80">
                    <img 
                      src={bestsellers[0].cover} 
                      alt={bestsellers[0].title} 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg transform -rotate-3 transition-transform duration-500 hover:rotate-0"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
                    #1 Bestseller
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{bestsellers[0].title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">by {bestsellers[0].author}</p>
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(bestsellers[0].rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-muted-foreground">{bestsellers[0].rating}</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold mb-4">${bestsellers[0].price.toFixed(2)}</p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to={`/book/${bestsellers[0].id}`}
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                    <button className="btn-secondary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bestsellers Tabs */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <Tabs defaultValue="All">
              <div className="flex justify-between items-center mb-6">
                <h2 className="section-heading mb-0">All Bestsellers</h2>
                <TabsList>
                  {categories.map(category => (
                    <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map(category => (
                <TabsContent key={category} value={category} className="mt-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {bestsellers.map((book, index) => (
                      <div key={book.id} style={{ animationDelay: `${index * 50}ms` }}>
                        <BookCard {...book} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Monthly Picks */}
          <Card className="mt-16 border-amber-200 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader className="bg-gradient-to-r from-amber-50 to-white pb-4">
              <CardTitle>Monthly Bestseller Picks</CardTitle>
              <CardDescription>
                Hand-picked selections from our literature experts
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              {bestsellers.slice(0, 3).map((book) => (
                <div key={book.id} className="flex gap-4">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-16 h-24 object-cover rounded-md" 
                  />
                  <div>
                    <h4 className="font-medium line-clamp-2">{book.title}</h4>
                    <p className="text-sm text-muted-foreground">{book.author}</p>
                    <Link 
                      to={`/book/${book.id}`}
                      className="text-primary text-sm font-medium hover:underline mt-1 inline-block"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BestSellersPage;
