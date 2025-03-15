
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  cover,
  price,
  originalPrice,
  rating = 0,
  isNew = false,
  isBestseller = false,
}) => {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link to={`/book/${id}`} className="book-card group animate-fade-in hover-scale">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={cover}
          alt={`Cover of ${title} by ${author}`}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        
        {(isNew || isBestseller || discount > 0) && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isNew && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                New
              </span>
            )}
            {isBestseller && (
              <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                Bestseller
              </span>
            )}
            {discount > 0 && (
              <span className="px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full">
                -{discount}%
              </span>
            )}
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium line-clamp-2 mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">{author}</p>
        
        {rating > 0 && (
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < Math.floor(rating) 
                    ? 'text-amber-400 fill-amber-400' 
                    : i < rating 
                      ? 'text-amber-400 fill-amber-400 opacity-50' 
                      : 'text-muted-foreground'
                } mr-1`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">{rating.toFixed(1)}</span>
          </div>
        )}
        
        <div className="mt-auto flex items-baseline">
          <span className="font-semibold">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
