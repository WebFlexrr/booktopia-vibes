
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Trash2, ShoppingCart, ChevronLeft, ArrowRight } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Mock cart data
const initialCartItems = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 16.99,
    quantity: 1,
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    price: 14.99,
    quantity: 2,
  },
];

interface CartItem {
  id: string;
  title: string;
  author: string;
  cover: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  
  // Cart calculations
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 50 ? 0 : 4.99;
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shippingCost - discount;
  
  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove item from cart
  const removeItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };
  
  // Apply coupon code
  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'BOOKOPIA10') {
      setCouponApplied(true);
      toast({
        title: "Coupon applied!",
        description: "10% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid coupon",
        description: "The coupon code you entered is invalid or expired.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-semibold mb-8 animate-slide-up">Your Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16 animate-fade-in">
              <div className="flex justify-center mb-6">
                <ShoppingCart size={64} className="text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added any books to your cart yet.</p>
              <Link to="/categories" className="btn-primary inline-flex items-center">
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 animate-slide-up">
                <div className="rounded-xl bg-card shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-medium">Cart Items ({cartItems.length})</h2>
                      <button
                        onClick={() => setCartItems([])}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        Clear cart
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-border">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex gap-6">
                        <div className="w-20 h-28 flex-shrink-0 overflow-hidden rounded-lg">
                          <img 
                            src={item.cover}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <Link to={`/book/${item.id}`} className="font-medium hover:text-primary transition-colors">
                            {item.title}
                          </Link>
                          <p className="text-sm text-muted-foreground">by {item.author}</p>
                          <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-l border border-border"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <div className="w-10 h-8 flex items-center justify-center border-t border-b border-border">
                                {item.quantity}
                              </div>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center rounded-r border border-border"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 border-t border-border">
                    <Link 
                      to="/categories" 
                      className="flex items-center text-primary hover:underline"
                    >
                      <ChevronLeft size={16} className="mr-1" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="rounded-xl bg-card shadow-sm overflow-hidden sticky top-24">
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-medium">Order Summary</h2>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shippingCost === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `$${shippingCost.toFixed(2)}`
                        )}
                      </span>
                    </div>
                    
                    {couponApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                      
                      {subtotal < 50 && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Add ${(50 - subtotal).toFixed(2)} more to qualify for free shipping.
                        </p>
                      )}
                    </div>
                    
                    <div className="pt-4">
                      <div className="flex">
                        <input
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-grow py-2 px-3 rounded-l-lg border border-r-0 border-input focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button
                          onClick={applyCoupon}
                          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 rounded-r-lg transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Try "BOOKOPIA10" for 10% off your order.
                      </p>
                    </div>
                    
                    <Link
                      to="/checkout"
                      className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
                    >
                      Proceed to Checkout
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
