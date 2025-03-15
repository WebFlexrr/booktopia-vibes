
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BookCollection from '../components/home/BookCollection';
import { Star, Heart, Share, ChevronDown, ShoppingCart, Bookmark, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Mock data for a single book
const bookData = {
  id: '1',
  title: 'The Midnight Library',
  author: 'Matt Haig',
  publisher: 'Viking',
  publishDate: 'August 13, 2020',
  cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  price: 16.99,
  originalPrice: 24.99,
  rating: 4.5,
  reviewCount: 2347,
  isInStock: true,
  description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?

A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.

Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?`,
  categories: ['Fiction', 'Fantasy', 'Contemporary'],
  pages: 304,
  isbn: '9780525559474',
  language: 'English',
};

// Mock data for recommended books
const recommendedBooks = [
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    rating: 4.8,
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80',
    price: 18.99,
    rating: 4.7,
  },
  {
    id: '4',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schwab',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 15.99,
    rating: 4.3,
  },
  {
    id: '5',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    cover: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    price: 12.99,
    rating: 4.6,
  },
  {
    id: '6',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    price: 11.99,
    rating: 4.9,
  },
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  // In a real app, you would fetch the book data based on the ID
  const book = bookData;
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${book.title} (${quantity}) has been added to your cart.`,
    });
  };
  
  const handleBuyNow = () => {
    // In a real app, this would redirect to checkout
    toast({
      title: "Proceeding to checkout",
      description: "You are being redirected to the checkout page.",
    });
  };
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${book.title} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const truncatedDescription = showFullDescription 
    ? book.description 
    : `${book.description.substring(0, 300)}...`;

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book Cover */}
            <div className="animate-slide-up">
              <div className="sticky top-24 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={book.cover} 
                  alt={`Cover of ${book.title}`} 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
            </div>
            
            {/* Book Details */}
            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {book.categories.map((category) => (
                  <span 
                    key={category} 
                    className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-semibold mb-2">{book.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">by {book.author}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(book.rating) 
                          ? 'text-amber-400 fill-amber-400' 
                          : i < book.rating 
                            ? 'text-amber-400 fill-amber-400 opacity-50' 
                            : 'text-muted-foreground'
                      } mr-1`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground ml-2">{book.rating} ({book.reviewCount} reviews)</span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-semibold">${book.price.toFixed(2)}</span>
                  {book.originalPrice && (
                    <span className="ml-3 text-lg text-muted-foreground line-through">
                      ${book.originalPrice.toFixed(2)}
                    </span>
                  )}
                  
                  {book.originalPrice && (
                    <span className="ml-3 text-sm font-medium px-2 py-1 rounded-full bg-red-500 text-white">
                      {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mt-1">
                  {book.isInStock ? (
                    <span className="text-green-600 font-medium flex items-center">
                      <Check size={16} className="mr-1" /> In Stock
                    </span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-l-full border border-border"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center border-t border-b border-border">
                    {quantity}
                  </div>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-r-full border border-border"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                <div className="flex flex-1 gap-3">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 btn-secondary flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                  
                  <button 
                    onClick={handleBuyNow}
                    className="flex-1 btn-primary flex items-center justify-center gap-2"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              
              <div className="flex gap-4 mb-8">
                <button 
                  onClick={handleWishlist}
                  className={`btn-outline flex items-center gap-2 ${isWishlisted ? 'text-red-500 border-red-500' : ''}`}
                >
                  <Heart size={18} className={isWishlisted ? 'fill-red-500' : ''} />
                  {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
                
                <button className="btn-outline flex items-center gap-2">
                  <Share size={18} />
                  Share
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold text-lg mb-3">Description</h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {truncatedDescription}
                  </p>
                  {book.description.length > 300 && (
                    <button 
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="text-primary mt-2 flex items-center"
                    >
                      {showFullDescription ? 'Show less' : 'Read more'}
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-300 ${showFullDescription ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  )}
                </div>
                
                <div className="subtle-divider" />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Publisher</p>
                    <p className="font-medium">{book.publisher}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Publication Date</p>
                    <p className="font-medium">{book.publishDate}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Language</p>
                    <p className="font-medium">{book.language}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Pages</p>
                    <p className="font-medium">{book.pages}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">ISBN</p>
                    <p className="font-medium">{book.isbn}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <BookCollection 
              title="You Might Also Like" 
              books={recommendedBooks}
              link={{ text: "View more recommendations", url: "/recommendations" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
