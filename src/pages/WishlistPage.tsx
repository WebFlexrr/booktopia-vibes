
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { ShoppingCart, Heart, Trash2, Share2 } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import BookCard from '../components/ui/BookCard';
import { books } from '@/db/books';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState(books.splice(2,6));
  const [email, setEmail] = useState('');
  const [isSharing, setIsSharing] = useState(false);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    toast({
      title: "Removed from wishlist",
      description: "The book has been removed from your wishlist.",
    });
  };

  const addToCart = (item: {title:string}) => {
    // In a real app, this would add the item to the cart
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    });
  };

  const shareWishlist = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wishlist shared",
      description: `Your wishlist has been shared with ${email}.`,
    });
    setEmail('');
    setIsSharing(false);
  };

  const addAllToCart = () => {
    // In a real app, this would add all items to the cart
    toast({
      title: "All books added to cart",
      description: `${wishlistItems.length} books have been added to your cart.`,
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    toast({
      title: "Wishlist cleared",
      description: "All books have been removed from your wishlist.",
    });
  };

  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 animate-slide-up">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link
                  to="/account"
                  className="hover:text-foreground transition-colors"
                >
                  My Account
                </Link>
                <span>/</span>
                <span className="text-foreground">My Wishlist</span>
              </div>
              <h1 className="text-3xl font-semibold flex items-center gap-2">
                <Heart className="text-red-500" size={24} />
                My Wishlist
              </h1>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <Button
                variant="outline"
                onClick={() => setIsSharing(!isSharing)}
                className="flex items-center gap-2"
              >
                <Share2 size={16} />
                Share Wishlist
              </Button>
              <Button
                variant="outline"
                onClick={clearWishlist}
                className="flex items-center gap-2"
                disabled={wishlistItems.length === 0}
              >
                <Trash2 size={16} />
                Clear All
              </Button>
              <Button
                onClick={addAllToCart}
                className="flex items-center gap-2"
                disabled={wishlistItems.length === 0}
              >
                <ShoppingCart size={16} />
                Add All to Cart
              </Button>
            </div>
          </div>

          {isSharing && (
            <div className="bg-card rounded-lg p-4 mb-6 animate-slide-down border">
              <h3 className="text-lg font-medium mb-2">Share your wishlist</h3>
              <form onSubmit={shareWishlist} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow"
                  required
                />
                <Button type="submit">Share</Button>
              </form>
            </div>
          )}

          {wishlistItems.length > 0 ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative group animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative">
                      <BookCard {...item} />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 h-7 w-7 rounded-full z-10 shadow-md opacity-80 hover:opacity-100"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFromWishlist(item.id);
                        }}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <div className="bg-muted/30 p-6 rounded-lg text-center max-w-md mx-auto">
                  <h3 className="text-lg font-medium mb-2">
                    Add more books to your wishlist
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Keep browsing our collection to find more books you'll love.
                  </p>
                  <Button asChild>
                    <Link to="/">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-card rounded-xl shadow-sm p-8 text-center animate-slide-up">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <Heart size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Add items to your wishlist by clicking the heart icon on book
                pages. Your wishlist items will be saved for your next visit.
              </p>
              <Button asChild>
                <Link to="/">Start Browsing</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;
