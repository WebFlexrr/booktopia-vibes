
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import BookCard from '../components/ui/BookCard';
import { Button } from '../components/ui/button';
import { ChevronRight, ShoppingBag, Gift, BookOpen, BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data
const newReleases = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 16.99,
    originalPrice: 24.99,
    rating: 4.5,
    isNew: true,
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.8,
    isNew: true,
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    price: 18.99,
    originalPrice: 25.99,
    rating: 4.7,
    isNew: true,
  },
  {
    id: '4',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 15.99,
    originalPrice: 22.99,
    rating: 4.3,
    isNew: true,
  },
];

const popularBooks = [
  {
    id: '6',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    price: 11.99,
    originalPrice: 18.99,
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: '7',
    title: '1984',
    author: 'George Orwell',
    cover: 'https://images.unsplash.com/photo-1603289847962-9e48b33f6305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 10.99,
    originalPrice: 15.99,
    rating: 4.7,
    isBestseller: true,
  },
  {
    id: '8',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 9.99,
    originalPrice: 14.99,
    rating: 4.8,
    isBestseller: true,
  },
  {
    id: '9',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 12.99,
    originalPrice: 17.99,
    rating: 4.5,
    isBestseller: true,
  },
];

const deals = [
  {
    id: '11',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    cover: 'https://images.unsplash.com/photo-1510172951991-856a62a9cbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 8.99,
    originalPrice: 14.99,
    rating: 4.6,
  },
  {
    id: '12',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.7,
  },
  {
    id: '13',
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    cover: 'https://images.unsplash.com/photo-1531346644014-461484b3f44e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80',
    price: 9.99,
    originalPrice: 16.99,
    rating: 4.5,
  },
  {
    id: '14',
    title: 'Educated',
    author: 'Tara Westover',
    cover: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80',
    price: 11.99,
    originalPrice: 17.99,
    rating: 4.4,
  },
];

const biographiesBooks = [
  {
    id: '20',
    title: 'Becoming',
    author: 'Michelle Obama',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 13.99,
    originalPrice: 22.99,
    rating: 4.8,
  },
  {
    id: '21',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    cover: 'https://images.unsplash.com/photo-1510172951991-856a62a9cbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.7,
  },
  {
    id: '22',
    title: 'Born a Crime',
    author: 'Trevor Noah',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    price: 12.99,
    originalPrice: 18.99,
    rating: 4.9,
  },
];

const childrenBooks = [
  {
    id: '30',
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 9.99,
    originalPrice: 14.99,
    rating: 4.9,
  },
  {
    id: '31',
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    cover: 'https://images.unsplash.com/photo-1510172951991-856a62a9cbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 8.99,
    originalPrice: 12.99,
    rating: 4.8,
  },
  {
    id: '32',
    title: 'Charlotte\'s Web',
    author: 'E.B. White',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    price: 7.99,
    originalPrice: 11.99,
    rating: 4.7,
  },
];

const fictionBooks = [
  {
    id: '40',
    title: 'The Shining',
    author: 'Stephen King',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 11.99,
    originalPrice: 16.99,
    rating: 4.7,
  },
  {
    id: '41',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: 'https://images.unsplash.com/photo-1510172951991-856a62a9cbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 10.99,
    originalPrice: 15.99,
    rating: 4.9,
  },
  {
    id: '42',
    title: 'Dune',
    author: 'Frank Herbert',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    price: 12.99,
    originalPrice: 17.99,
    rating: 4.8,
  },
];

const topBooks = [
  {
    id: '50',
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.8,
  },
  {
    id: '51',
    title: 'It Ends with Us',
    author: 'Colleen Hoover',
    cover: 'https://images.unsplash.com/photo-1510172951991-856a62a9cbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 12.99,
    originalPrice: 17.99,
    rating: 4.7,
  },
  {
    id: '52',
    title: 'Verity',
    author: 'Colleen Hoover',
    cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80',
    price: 11.99,
    originalPrice: 16.99,
    rating: 4.6,
  },
];

// Categories with icons
const categories = [
  { id: 1, name: "Fiction", icon: <BookText className="h-5 w-5" /> },
  { id: 2, name: "Non-Fiction", icon: <BookOpen className="h-5 w-5" /> },
  { id: 3, name: "Children", icon: <Gift className="h-5 w-5" /> },
  { id: 4, name: "Self-Help", icon: <ShoppingBag className="h-5 w-5" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-pink-100 overflow-hidden pt-24 pb-16">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h4 className="text-lg font-medium mb-2">New & Trending</h4>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Best Books of 2022</h1>
              <p className="text-gray-600 mb-8">Discover the most popular books of the year selected by our editors</p>
              <Button className="bg-red-500 hover:bg-red-600 rounded-full px-8">Explore Now</Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <img 
            src="/lovable-uploads/1c4804fd-7fea-4d46-af94-467212c5c969.png" 
            alt="Decorative background" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-10 left-10">
            <div className="w-16 h-16 bg-green-200 rounded-full" />
          </div>
          <div className="absolute bottom-10 right-10">
            <div className="w-12 h-12 bg-red-200 rounded-full" />
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link to={`/category/${category.id}`} key={category.id} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
                    {category.icon}
                  </div>
                  <span className="text-sm font-medium">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Deals of the Week */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Deals Of The Week</h2>
              <span className="text-red-500 font-medium">$12.99-$16.99</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {deals.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Top Selling Brands */}
        <section className="py-6 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">Top Selling Brands</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Penguin Books</span>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Random House</span>
              </div>
              <div className="bg-pink-100 p-4 rounded-lg flex items-center justify-center">
                <span className="font-medium">Harper Collins</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections Grid */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-yellow-100 p-6 rounded-lg">
                <h3 className="font-bold mb-1">Novels & Fiction</h3>
                <p className="text-sm text-gray-600 mb-4">Bestselling novels</p>
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="Fiction" className="w-full h-32 object-cover rounded" />
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold mb-1">Science</h3>
                <p className="text-sm text-gray-600 mb-4">Discover science</p>
                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="Science" className="w-full h-32 object-cover rounded" />
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="font-bold mb-1">History Texts</h3>
                <p className="text-sm text-gray-600 mb-4">History books</p>
                <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="History" className="w-full h-32 object-cover rounded" />
              </div>
              <div className="bg-red-100 p-6 rounded-lg">
                <h3 className="font-bold mb-1">Children's Books</h3>
                <p className="text-sm text-gray-600 mb-4">For younger readers</p>
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="Children" className="w-full h-32 object-cover rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Books */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Popular Books</h2>
              <Link to="/bestsellers" className="text-red-500 font-medium flex items-center">
                See More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                  isBestseller={book.isBestseller}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Holiday Gift Guide Banner */}
        <section className="py-16 bg-green-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Holiday Gift Guide</h2>
            <p className="text-gray-600 mb-6">Find the perfect books for everyone on your list</p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full border border-gray-300 px-8">
              Shop Now
            </Button>
          </div>
        </section>

        {/* Biographies & Memoirs */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">Biographies & Memoirs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {biographiesBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Children's Books */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">Children's Books</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {childrenBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Literature & Fiction */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">Literature & Fiction</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {fictionBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bookstore Meetup */}
        <section className="py-16 bg-blue-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Bookery Store Meetup</h2>
                <p className="text-gray-600 mb-6">Join our community of book lovers for monthly discussions and author events</p>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Gift className="h-5 w-5" />
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-end">
                <img 
                  src="https://images.unsplash.com/photo-1521056787327-865a2f82db9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                  alt="Bookstore" 
                  className="rounded-lg shadow-md max-w-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Top 100 Books */}
        <section className="py-10 bg-white">
          <div className="container-custom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Top 100 Books</h2>
              <Link to="/top-100" className="text-red-500 font-medium flex items-center">
                See More <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {topBooks.map((book) => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  cover={book.cover}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  rating={book.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-pink-100">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold mb-4">10% Off Your Order!</h2>
            <p className="text-gray-600 mb-6">Subscribe to our newsletter for promotions and new releases</p>
            <div className="max-w-md mx-auto flex">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-l-full border-y border-l border-gray-300 focus:outline-none" />
              <Button className="rounded-r-full bg-red-500 hover:bg-red-600">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
