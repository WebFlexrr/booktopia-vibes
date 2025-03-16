
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Book, User, Tag, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

// Mock data for suggestions - in a real app, this would come from an API
const mockSuggestions = {
  recentSearches: ['harry potter', 'stephen king', 'fantasy novels'],
  books: [
    { id: '1', title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: '2', title: 'The Shining', author: 'Stephen King' },
    { id: '3', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: '4', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ],
  authors: [
    { id: '1', name: 'J.K. Rowling' },
    { id: '2', name: 'Stephen King' },
    { id: '3', name: 'F. Scott Fitzgerald' },
  ],
  categories: [
    { id: '1', name: 'Fantasy' },
    { id: '2', name: 'Horror' },
    { id: '3', name: 'Classic Literature' },
  ]
};

interface SearchBarProps {
  onClose?: () => void;
  fullWidth?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, fullWidth = false }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Filter suggestions based on query
  const filteredBooks = query 
    ? mockSuggestions.books.filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase()))
    : mockSuggestions.books;

  const filteredAuthors = query
    ? mockSuggestions.authors.filter(author => 
        author.name.toLowerCase().includes(query.toLowerCase()))
    : mockSuggestions.authors;

  const filteredCategories = query
    ? mockSuggestions.categories.filter(category => 
        category.name.toLowerCase().includes(query.toLowerCase()))
    : mockSuggestions.categories;

  const recentSearches = mockSuggestions.recentSearches.filter(search => 
    !query || search.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    // Show suggestions if there's a query
    setShowSuggestions(query.length > 0);
    
    // Handle click outside to close suggestions
    const handleClickOutside = (e: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(e.target as Node) &&
        inputRef.current && 
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setShowSuggestions(true);
    }
  };

  const handleBookSelect = (id: string) => {
    navigate(`/book/${id}`);
    setShowSuggestions(false);
    if (onClose) onClose();
  };

  const handleAuthorSelect = (id: string) => {
    navigate(`/authors/${id}`);
    setShowSuggestions(false);
    if (onClose) onClose();
  };

  const handleCategorySelect = (id: string) => {
    navigate(`/category/${id}`);
    setShowSuggestions(false);
    if (onClose) onClose();
  };

  const handleRecentSearchSelect = (search: string) => {
    setQuery(search);
    // In a real app, you would perform the search with this term
    console.log('Searching for recent term:', search);
    setShowSuggestions(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Search for:', query);
    setShowSuggestions(false);
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'max-w-2xl mx-auto'}`}>
      <form 
        onSubmit={handleSubmit} 
        className={`flex items-center`}
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
            onChange={handleInputChange}
            onFocus={() => query && setShowSuggestions(true)}
            className="w-full pl-12 pr-12 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setShowSuggestions(false);
              }}
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

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 w-full mt-2 p-2 bg-background border border-border rounded-lg shadow-lg z-50 max-h-[70vh] overflow-auto"
        >
          <Command className="rounded-lg border shadow-md">
            {query && (
              <div className="px-4 py-2 border-b">
                <p className="text-sm text-muted-foreground">
                  Showing results for <span className="font-medium text-foreground">"{query}"</span>
                </p>
              </div>
            )}

            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              {recentSearches.length > 0 && (
                <CommandGroup heading="Recent Searches">
                  {recentSearches.map((search, index) => (
                    <CommandItem 
                      key={`recent-${index}`} 
                      onSelect={() => handleRecentSearchSelect(search)}
                      className="flex items-center cursor-pointer"
                    >
                      <Clock size={16} className="mr-2 text-muted-foreground" />
                      <span>{search}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {filteredBooks.length > 0 && (
                <CommandGroup heading="Books">
                  {filteredBooks.map(book => (
                    <CommandItem 
                      key={`book-${book.id}`} 
                      onSelect={() => handleBookSelect(book.id)}
                      className="flex items-center cursor-pointer"
                    >
                      <Book size={16} className="mr-2 text-muted-foreground" />
                      <div>
                        <p className="text-sm">{book.title}</p>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {filteredAuthors.length > 0 && (
                <CommandGroup heading="Authors">
                  {filteredAuthors.map(author => (
                    <CommandItem 
                      key={`author-${author.id}`} 
                      onSelect={() => handleAuthorSelect(author.id)}
                      className="flex items-center cursor-pointer"
                    >
                      <User size={16} className="mr-2 text-muted-foreground" />
                      <span>{author.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {filteredCategories.length > 0 && (
                <CommandGroup heading="Categories">
                  {filteredCategories.map(category => (
                    <CommandItem 
                      key={`category-${category.id}`} 
                      onSelect={() => handleCategorySelect(category.id)}
                      className="flex items-center cursor-pointer"
                    >
                      <Tag size={16} className="mr-2 text-muted-foreground" />
                      <span>{category.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
