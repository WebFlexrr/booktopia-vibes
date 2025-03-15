
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import TrendingBooks from '../components/home/TrendingBooks';
import BookCollection from '../components/home/BookCollection';

// Mock data
const newReleases = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 16.99,
    rating: 4.5,
    isNew: true,
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    rating: 4.8,
    isNew: true,
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    price: 18.99,
    rating: 4.7,
    isNew: true,
  },
  {
    id: '4',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 15.99,
    rating: 4.3,
    isNew: true,
  },
  {
    id: '5',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    cover: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 12.99,
    rating: 4.6,
    isNew: true,
  },
];

const bestsellers = [
  {
    id: '6',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    price: 11.99,
    rating: 4.9,
    isBestseller: true,
  },
  {
    id: '7',
    title: '1984',
    author: 'George Orwell',
    cover: 'https://images.unsplash.com/photo-1603289847962-9e48b33f6305?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 10.99,
    rating: 4.7,
    isBestseller: true,
  },
  {
    id: '8',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 9.99,
    rating: 4.8,
    isBestseller: true,
  },
  {
    id: '9',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 12.99,
    rating: 4.5,
    isBestseller: true,
  },
  {
    id: '10',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    cover: 'https://images.unsplash.com/photo-1565492546945-28460b3209ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
    price: 11.99,
    rating: 4.3,
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
  {
    id: '15',
    title: 'Becoming',
    author: 'Michelle Obama',
    cover: 'https://images.unsplash.com/photo-1520177812839-78269c5ed63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    price: 13.99,
    originalPrice: 22.99,
    rating: 4.8,
  },
];

const Index = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />

        <BookCollection 
          title="New Releases" 
          books={newReleases}
          link={{ text: "View all new releases", url: "/new-releases" }}
        />

        <TrendingBooks />

        <BookCollection 
          title="Bestsellers" 
          books={bestsellers}
          link={{ text: "View all bestsellers", url: "/bestsellers" }}
        />

        <BookCollection 
          title="Special Deals" 
          books={deals}
          link={{ text: "View all deals", url: "/deals" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
