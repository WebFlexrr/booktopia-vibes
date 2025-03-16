
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Heart } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight animate-fade-in">
          bookopia
        </Link>

        <nav className={`hidden md:flex items-center space-x-8 animate-fade-in`}>
          <Link to="/categories" className="link-hover">
            Categories
          </Link>
          <Link to="/bestsellers" className="link-hover">
            Bestsellers
          </Link>
          <Link to="/new-releases" className="link-hover">
            New Releases
          </Link>
          <Link to="/authors" className="link-hover">
            Authors
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)} 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <Link 
            to="/wishlist" 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Wishlist"
          >
            <Heart size={20} />
          </Link>
          
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
          </Link>
          
          <Link 
            to="/login" 
            className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
            aria-label="Account"
          >
            <User size={20} />
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full md:hidden hover:bg-secondary/80 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border animate-slide-down">
          <div className="container-custom py-4 space-y-4">
            <Link to="/categories" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Categories
            </Link>
            <Link to="/bestsellers" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Bestsellers
            </Link>
            <Link to="/new-releases" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
              New Releases
            </Link>
            <Link to="/authors" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Authors
            </Link>
            <Link to="/wishlist" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Wishlist
            </Link>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full glass animate-slide-down py-4">
          <div className="container-custom">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
