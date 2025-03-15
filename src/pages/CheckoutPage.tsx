
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { CreditCard, MapPin, ShoppingBag, ChevronRight, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Mock saved addresses
const savedAddresses = [
  {
    id: '1',
    name: 'John Doe',
    street: '123 Bookworm Lane',
    city: 'Literary City',
    state: 'Readable State',
    zipCode: '12345',
    phone: '(555) 123-4567',
    isDefault: true,
  },
  {
    id: '2',
    name: 'John Doe',
    street: '456 Novel Avenue',
    city: 'Fiction Town',
    state: 'Fantasy Province',
    zipCode: '67890',
    phone: '(555) 987-6543',
    isDefault: false,
  },
];

// Mock cart items
const cartItems = [
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

interface CheckoutStep {
  id: string;
  title: string;
  icon: React.ElementType;
}

const steps: CheckoutStep[] = [
  { id: 'address', title: 'Delivery Address', icon: MapPin },
  { id: 'payment', title: 'Payment Method', icon: CreditCard },
  { id: 'review', title: 'Review Order', icon: ShoppingBag },
];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<string>('address');
  const [selectedAddress, setSelectedAddress] = useState<string>(savedAddresses[0].id);
  const [addingNewAddress, setAddingNewAddress] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  
  // Form states
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });
  
  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shippingCost = subtotal > 50 ? 0 : 4.99;
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + shippingCost + tax;
  
  // Handle address form input
  const handleAddressInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission for new address
  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the address to the database
    toast({
      title: "Address saved",
      description: "Your new address has been saved successfully.",
    });
    setAddingNewAddress(false);
    setSelectedAddress('new'); // Pretend we have an ID for the new address
  };
  
  // Navigate between steps
  const nextStep = () => {
    if (activeStep === 'address') {
      setActiveStep('payment');
    } else if (activeStep === 'payment') {
      setActiveStep('review');
    } else if (activeStep === 'review') {
      // Place order logic
      toast({
        title: "Order placed!",
        description: "Your order has been placed successfully. Thank you for shopping with us!",
      });
      // Redirect to order confirmation or home page
      setTimeout(() => {
        navigate('/account/orders');
      }, 2000);
    }
  };
  
  const prevStep = () => {
    if (activeStep === 'payment') {
      setActiveStep('address');
    } else if (activeStep === 'review') {
      setActiveStep('payment');
    }
  };
  
  // Check if current step can proceed
  const canProceed = () => {
    if (activeStep === 'address') {
      return selectedAddress !== '' || (addingNewAddress && Object.values(newAddress).every(val => val !== ''));
    }
    return true;
  };
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <h1 className="text-3xl font-semibold mb-10 animate-slide-up">Checkout</h1>
          
          {/* Checkout Steps */}
          <div className="flex justify-between mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex-1 flex flex-col items-center ${index < steps.length - 1 ? 'relative' : ''}`}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                    activeStep === step.id 
                      ? 'bg-primary text-primary-foreground'
                      : steps.findIndex(s => s.id === activeStep) > index 
                        ? 'bg-green-500 text-white' 
                        : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  {steps.findIndex(s => s.id === activeStep) > index ? <Check size={24} /> : <step.icon size={24} />}
                </div>
                
                <p className={`text-sm font-medium ${activeStep === step.id ? 'text-primary' : ''}`}>
                  {step.title}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-[60%] w-[80%] h-[2px] bg-secondary">
                    <div 
                      className={`h-full bg-green-500 transition-all ${
                        steps.findIndex(s => s.id === activeStep) > index ? 'w-full' : '0'
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Checkout Form */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '200ms' }}>
              {/* Address Step */}
              {activeStep === 'address' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-medium mb-6">Select Delivery Address</h2>
                  
                  {!addingNewAddress && (
                    <>
                      <div className="space-y-4 mb-6">
                        {savedAddresses.map(address => (
                          <div 
                            key={address.id} 
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              selectedAddress === address.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary'
                            }`}
                            onClick={() => setSelectedAddress(address.id)}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{address.name}</span>
                                  {address.isDefault && (
                                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Default</span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground mt-1">{address.street}</p>
                                <p className="text-sm text-muted-foreground">{address.city}, {address.state} {address.zipCode}</p>
                                <p className="text-sm text-muted-foreground mt-1">Phone: {address.phone}</p>
                              </div>
                              
                              <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center border-input">
                                {selectedAddress === address.id && (
                                  <div className="w-3 h-3 rounded-full bg-primary" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        className="text-primary flex items-center font-medium hover:underline"
                        onClick={() => setAddingNewAddress(true)}
                      >
                        + Add a new address
                      </button>
                    </>
                  )}
                  
                  {/* New Address Form */}
                  {addingNewAddress && (
                    <form onSubmit={handleAddNewAddress} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            value={newAddress.name} 
                            onChange={handleAddressInput} 
                            placeholder="Your full name" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            name="phone" 
                            value={newAddress.phone} 
                            onChange={handleAddressInput} 
                            placeholder="Your phone number" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="street">Street Address</Label>
                        <Textarea 
                          id="street" 
                          name="street" 
                          value={newAddress.street} 
                          onChange={handleAddressInput} 
                          placeholder="Street address, P.O. box, company name, c/o" 
                          required 
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city" 
                            name="city" 
                            value={newAddress.city} 
                            onChange={handleAddressInput} 
                            placeholder="City" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input 
                            id="state" 
                            name="state" 
                            value={newAddress.state} 
                            onChange={handleAddressInput} 
                            placeholder="State/Province/Region" 
                            required 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input 
                            id="zipCode" 
                            name="zipCode" 
                            value={newAddress.zipCode} 
                            onChange={handleAddressInput} 
                            placeholder="ZIP/Postal code" 
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-3 pt-2">
                        <Button 
                          type="submit" 
                          className="flex-1"
                        >
                          Save Address
                        </Button>
                        
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setAddingNewAddress(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              )}
              
              {/* Payment Step */}
              {activeStep === 'payment' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-medium mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'card' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <CreditCard size={18} className="text-primary" />
                          </div>
                          <span className="font-medium">Credit/Debit Card</span>
                        </div>
                        
                        <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center border-input">
                          {paymentMethod === 'card' && (
                            <div className="w-3 h-3 rounded-full bg-primary" />
                          )}
                        </div>
                      </div>
                      
                      {paymentMethod === 'card' && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input 
                                id="cardNumber" 
                                placeholder="1234 5678 9012 3456" 
                                required 
                              />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiryDate">Expiry Date</Label>
                                <Input 
                                  id="expiryDate" 
                                  placeholder="MM/YY" 
                                  required 
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="cvv">Security Code (CVV)</Label>
                                <Input 
                                  id="cvv" 
                                  placeholder="123" 
                                  required 
                                />
                              </div>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="nameOnCard">Name on Card</Label>
                              <Input 
                                id="nameOnCard" 
                                placeholder="Exactly as shown on the card" 
                                required 
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'paypal' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-blue-500/10 rounded flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">Pay</span>
                          </div>
                          <span className="font-medium">PayPal</span>
                        </div>
                        
                        <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center border-input">
                          {paymentMethod === 'paypal' && (
                            <div className="w-3 h-3 rounded-full bg-primary" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === 'cod' 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border hover:border-primary'
                      }`}
                      onClick={() => setPaymentMethod('cod')}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-6 bg-green-500/10 rounded flex items-center justify-center">
                            <ShoppingBag size={18} className="text-green-600" />
                          </div>
                          <span className="font-medium">Cash on Delivery</span>
                        </div>
                        
                        <div className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center border-input">
                          {paymentMethod === 'cod' && (
                            <div className="w-3 h-3 rounded-full bg-primary" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Review Step */}
              {activeStep === 'review' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-medium mb-6">Review Your Order</h2>
                  
                  <div className="space-y-6">
                    {/* Delivery Address Summary */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Delivery Address</h3>
                        <button 
                          className="text-sm text-primary hover:underline"
                          onClick={() => setActiveStep('address')}
                        >
                          Change
                        </button>
                      </div>
                      
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-muted-foreground">123 Bookworm Lane</p>
                        <p className="text-sm text-muted-foreground">Literary City, Readable State 12345</p>
                        <p className="text-sm text-muted-foreground mt-1">Phone: (555) 123-4567</p>
                      </div>
                    </div>
                    
                    {/* Payment Method Summary */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium">Payment Method</h3>
                        <button 
                          className="text-sm text-primary hover:underline"
                          onClick={() => setActiveStep('payment')}
                        >
                          Change
                        </button>
                      </div>
                      
                      <div className="bg-muted/30 p-3 rounded-lg">
                        {paymentMethod === 'card' && (
                          <div className="flex items-center gap-2">
                            <CreditCard size={18} className="text-primary" />
                            <span>Credit/Debit Card ending in 3456</span>
                          </div>
                        )}
                        {paymentMethod === 'paypal' && (
                          <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold text-sm">Pay</span>
                            <span>PayPal</span>
                          </div>
                        )}
                        {paymentMethod === 'cod' && (
                          <div className="flex items-center gap-2">
                            <ShoppingBag size={18} className="text-green-600" />
                            <span>Cash on Delivery</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Order Items */}
                    <div>
                      <h3 className="font-medium mb-3">Order Items</h3>
                      
                      <div className="divide-y divide-border border rounded-lg overflow-hidden">
                        {cartItems.map((item) => (
                          <div key={item.id} className="p-4 flex gap-4">
                            <div className="w-16 h-24 flex-shrink-0 overflow-hidden rounded bg-muted">
                              <img 
                                src={item.cover}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            
                            <div className="flex-grow">
                              <p className="font-medium">{item.title}</p>
                              <p className="text-sm text-muted-foreground">by {item.author}</p>
                              <div className="flex justify-between items-center mt-2">
                                <p className="text-sm">Qty: {item.quantity}</p>
                                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between">
                {activeStep !== 'address' && (
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="flex items-center gap-2"
                  >
                    <ChevronRight className="rotate-180 h-4 w-4" />
                    Back
                  </Button>
                )}
                
                {activeStep === 'address' && (
                  <div /> // Empty div to keep the flex layout consistent
                )}
                
                <Button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="flex items-center gap-2"
                >
                  {activeStep === 'review' ? 'Place Order' : 'Continue'}
                  {activeStep !== 'review' && <ChevronRight className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-card rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal ({cartItems.reduce((total, item) => total + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>
                      {shippingCost === 0 ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between font-medium">
                      <span>Order Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
