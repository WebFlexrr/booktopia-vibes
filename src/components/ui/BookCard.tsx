
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

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
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Added to cart",
      description: `${title} has been added to your cart.`,
    });
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart first
    toast({
      title: "Proceeding to checkout",
      description: `${title} has been added to your cart.`,
    });
    // Navigate to checkout
    setTimeout(() => navigate('/checkout'), 500);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${title} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <Link
      to={`/book/${id}`}
      className="book-card group animate-fade-in hover-scale block"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
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

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm
                     transition-colors hover:bg-white ${
                       isWishlisted ? "text-red-500" : "text-gray-500"
                     }`}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} className={isWishlisted ? "fill-red-500" : ""} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow bg-card rounded-b-lg border border-t-0 border-border">
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
                    ? "text-amber-400 fill-amber-400"
                    : i < rating
                    ? "text-amber-400 fill-amber-400 opacity-50"
                    : "text-muted-foreground"
                } mr-1`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              {rating.toFixed(1)}
            </span>
          </div>
        )}

        <div className="mt-auto flex items-baseline mb-3">
          <span className="font-semibold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 mt-auto">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 py-1 flex items-center justify-center"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={14} className="mr-1" /> Add
          </Button>
          <Button size="sm" className="flex-1 py-1" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
