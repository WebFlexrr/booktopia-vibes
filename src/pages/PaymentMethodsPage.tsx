
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CreditCard, 
  Trash2, 
  Plus, 
  ChevronRight, 
  Edit, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { toast } from '../hooks/use-toast';

// Mock saved payment methods
const savedCards = [
  {
    id: '1',
    type: 'visa',
    name: 'John Doe',
    number: '•••• •••• •••• 4242',
    expiry: '12/25',
    isDefault: true,
  },
  {
    id: '2',
    type: 'mastercard',
    name: 'John Doe',
    number: '•••• •••• •••• 5555',
    expiry: '08/24',
    isDefault: false,
  }
];

const PaymentMethodsPage = () => {
  const navigate = useNavigate();
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cards, setCards] = useState(savedCards);
  
  const [newCard, setNewCard] = useState({
    cardNumber: '',
    name: '',
    expiry: '',
    cvv: '',
    isDefault: false
  });
  
  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewCard(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const addNewCard = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!newCard.cardNumber || !newCard.name || !newCard.expiry || !newCard.cvv) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Format card number for display
    const last4 = newCard.cardNumber.slice(-4);
    const maskedNumber = `•••• •••• •••• ${last4}`;
    
    // Create new card object
    const cardToAdd = {
      id: (cards.length + 1).toString(),
      type: newCard.cardNumber.startsWith('4') ? 'visa' : 'mastercard',
      name: newCard.name,
      number: maskedNumber,
      expiry: newCard.expiry,
      isDefault: newCard.isDefault
    };
    
    // Update default status if needed
    let updatedCards = [...cards];
    if (newCard.isDefault) {
      updatedCards = updatedCards.map(card => ({
        ...card,
        isDefault: false
      }));
    }
    
    // Add new card
    setCards([...updatedCards, cardToAdd]);
    
    // Reset form
    setNewCard({
      cardNumber: '',
      name: '',
      expiry: '',
      cvv: '',
      isDefault: false
    });
    
    setIsAddingCard(false);
    
    toast({
      title: "Card added",
      description: "Your payment method has been saved successfully.",
    });
  };
  
  const setDefaultCard = (cardId: string) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === cardId
    })));
    
    toast({
      title: "Default changed",
      description: "Your default payment method has been updated.",
    });
  };
  
  const deleteCard = (cardId: string) => {
    setCards(cards.filter(card => card.id !== cardId));
    
    toast({
      title: "Card removed",
      description: "The payment method has been removed successfully.",
    });
  };
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Payment Methods</h1>
              <p className="text-muted-foreground">Manage your payment information</p>
            </div>
            
            <Button 
              onClick={() => navigate('/account')}
              variant="outline"
              className="hidden sm:flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              Back to Account
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Saved Payment Methods</h2>
                    {!isAddingCard && (
                      <Button 
                        size="sm"
                        onClick={() => setIsAddingCard(true)}
                        className="flex items-center gap-1"
                      >
                        <Plus className="h-4 w-4" />
                        Add New
                      </Button>
                    )}
                  </div>
                </div>
                
                {cards.length === 0 && !isAddingCard ? (
                  <div className="p-8 text-center">
                    <AlertCircle className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h3 className="text-lg font-medium mb-2">No Payment Methods</h3>
                    <p className="text-muted-foreground mb-4">You haven't added any payment methods yet.</p>
                    <Button onClick={() => setIsAddingCard(true)}>Add Payment Method</Button>
                  </div>
                ) : (
                  <>
                    {!isAddingCard && (
                      <div className="divide-y divide-border">
                        {cards.map(card => (
                          <div key={card.id} className="p-6">
                            <div className="flex justify-between">
                              <div className="flex gap-4">
                                <div className="w-12 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center text-white">
                                  <CreditCard className="h-5 w-5" />
                                </div>
                                
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-medium">{card.type === 'visa' ? 'Visa' : 'Mastercard'}</span>
                                    {card.isDefault && (
                                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Default</span>
                                    )}
                                  </div>
                                  <p className="text-sm text-muted-foreground">{card.number}</p>
                                  <p className="text-sm text-muted-foreground mt-1">Expires {card.expiry}</p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2 items-start">
                                {!card.isDefault && (
                                  <Button 
                                    variant="ghost" 
                                    size="sm"
                                    onClick={() => setDefaultCard(card.id)}
                                    className="h-8"
                                  >
                                    <CheckCircle2 className="h-4 w-4" />
                                    <span className="sr-only">Set as default</span>
                                  </Button>
                                )}
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {}}
                                  className="h-8"
                                >
                                  <Edit className="h-4 w-4" />
                                  <span className="sr-only">Edit</span>
                                </Button>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  className="h-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                                  onClick={() => deleteCard(card.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {isAddingCard && (
                      <div className="p-6">
                        <form onSubmit={addNewCard}>
                          <h3 className="font-medium mb-4">Add New Payment Method</h3>
                          
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="cardNumber">Card Number</Label>
                              <Input 
                                id="cardNumber"
                                name="cardNumber"
                                value={newCard.cardNumber}
                                onChange={handleCardInput}
                                placeholder="1234 5678 9012 3456"
                                required
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="name">Name on Card</Label>
                              <Input 
                                id="name"
                                name="name"
                                value={newCard.name}
                                onChange={handleCardInput}
                                placeholder="Exactly as shown on the card"
                                required
                              />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input 
                                  id="expiry"
                                  name="expiry"
                                  value={newCard.expiry}
                                  onChange={handleCardInput}
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                              
                              <div className="space-y-2">
                                <Label htmlFor="cvv">Security Code (CVV)</Label>
                                <Input 
                                  id="cvv"
                                  name="cvv"
                                  value={newCard.cvv}
                                  onChange={handleCardInput}
                                  placeholder="123"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-2 pt-2">
                              <Switch 
                                id="isDefault"
                                name="isDefault"
                                checked={newCard.isDefault}
                                onCheckedChange={(checked) => setNewCard(prev => ({ ...prev, isDefault: checked }))}
                              />
                              <Label htmlFor="isDefault">Set as default payment method</Label>
                            </div>
                            
                            <div className="flex gap-3 pt-3">
                              <Button type="submit" className="flex-1">Save Payment Method</Button>
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="flex-1"
                                onClick={() => setIsAddingCard(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
            
            <div>
              <div className="bg-card rounded-xl shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Payment Security</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Your payment information is securely stored and encrypted using industry-standard protocols. We never store your full card details on our servers.
                </p>
                
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg mb-4">
                  <div className="mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-blue-800 mb-1">Secure Payments</h3>
                    <p className="text-xs text-blue-700">All transactions are secured with SSL encryption technology.</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => navigate('/settings')}
                  variant="outline"
                  className="w-full mt-2"
                >
                  Account Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentMethodsPage;
