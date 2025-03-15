
import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onClose?: () => void;
  fullWidth?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, fullWidth = false }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search for:', query);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex items-center ${fullWidth ? 'w-full' : 'max-w-2xl mx-auto'}`}
    >
      <div className="relative w-full">
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          size={18} 
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for books, authors, or topics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          >
            <X size={18} />
          </button>
        )}
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="ml-2 p-2 rounded-full hover:bg-secondary/80 transition-colors"
          aria-label="Close search"
        >
          <X size={20} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
