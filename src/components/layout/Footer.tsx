
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold tracking-tight">bookopia</h2>
            <p className="text-muted-foreground max-w-xs">
              Discover the perfect book for every moment, curated with care and delivered with passion.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full hover:bg-secondary/80 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-secondary/80 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-secondary/80 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-lg font-medium">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/bestsellers" className="text-muted-foreground hover:text-foreground transition-colors">Bestsellers</Link></li>
              <li><Link to="/new-releases" className="text-muted-foreground hover:text-foreground transition-colors">New Releases</Link></li>
              <li><Link to="/deals" className="text-muted-foreground hover:text-foreground transition-colors">Special Deals</Link></li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-lg font-medium">Account</h3>
            <ul className="space-y-3">
              <li><Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">Sign In</Link></li>
              <li><Link to="/signup" className="text-muted-foreground hover:text-foreground transition-colors">Create Account</Link></li>
              <li><Link to="/orders" className="text-muted-foreground hover:text-foreground transition-colors">Order History</Link></li>
              <li><Link to="/wishlist" className="text-muted-foreground hover:text-foreground transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <MapPin size={18} className="mr-2" />
                <span>123 Book Street, Reading, RG1 1AB</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone size={18} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail size={18} className="mr-2" />
                <span>support@bookopia.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="subtle-divider" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bookopia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-foreground transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
