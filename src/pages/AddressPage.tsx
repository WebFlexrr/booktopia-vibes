
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { MapPin, Plus, User, Phone, Edit, Trash2, Home, Building, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Mock saved addresses
const initialAddresses = [
  {
    id: '1',
    name: 'John Doe',
    street: '123 Bookworm Lane',
    city: 'Literary City',
    state: 'Readable State',
    zipCode: '12345',
    phone: '(555) 123-4567',
    isDefault: true,
    type: 'home' as const,
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
    type: 'work' as const,
  },
];

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault: boolean;
  type: 'home' | 'work' | 'other';
}

const AddressPage = () => {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  
  const blankAddress: Omit<Address, 'id'> = {
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    isDefault: false,
    type: 'home',
  };
  
  const [newAddress, setNewAddress] = useState<Omit<Address, 'id'>>(blankAddress);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleTypeSelect = (type: 'home' | 'work' | 'other') => {
    setNewAddress(prev => ({
      ...prev,
      type,
    }));
  };
  
  const handleDefaultChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAddress(prev => ({
      ...prev,
      isDefault: e.target.checked,
    }));
  };
  
  const resetForm = () => {
    setNewAddress(blankAddress);
    setIsAddingNew(false);
    setIsEditing(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zipCode || !newAddress.phone) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (isEditing) {
      // Update existing address
      setAddresses(prev => prev.map(addr => {
        if (addr.id === isEditing) {
          return {
            ...newAddress,
            id: addr.id,
          };
        }
        
        // If the new address is default, update other addresses
        if (newAddress.isDefault && addr.id !== isEditing) {
          return {
            ...addr,
            isDefault: false,
          };
        }
        
        return addr;
      }));
      
      toast({
        title: "Address updated",
        description: "Your address has been updated successfully.",
      });
    } else {
      // Add new address
      const newId = `address-${Date.now()}`;
      
      setAddresses(prev => {
        const updatedAddresses = newAddress.isDefault
          ? prev.map(addr => ({ ...addr, isDefault: false }))
          : [...prev];
        
        return [...updatedAddresses, { ...newAddress, id: newId }];
      });
      
      toast({
        title: "Address added",
        description: "Your new address has been added successfully.",
      });
    }
    
    resetForm();
  };
  
  const handleEdit = (id: string) => {
    const addressToEdit = addresses.find(addr => addr.id === id);
    if (addressToEdit) {
      setNewAddress({
        name: addressToEdit.name,
        street: addressToEdit.street,
        city: addressToEdit.city,
        state: addressToEdit.state,
        zipCode: addressToEdit.zipCode,
        phone: addressToEdit.phone,
        isDefault: addressToEdit.isDefault,
        type: addressToEdit.type,
      });
      setIsEditing(id);
      setIsAddingNew(true);
    }
  };
  
  const handleDelete = (id: string) => {
    const addressToDelete = addresses.find(addr => addr.id === id);
    
    if (addressToDelete?.isDefault && addresses.length > 1) {
      // If deleting the default address, set another one as default
      setAddresses(prev => {
        const filtered = prev.filter(addr => addr.id !== id);
        if (filtered.length > 0) {
          filtered[0].isDefault = true;
        }
        return filtered;
      });
    } else {
      setAddresses(prev => prev.filter(addr => addr.id !== id));
    }
    
    toast({
      title: "Address deleted",
      description: "The address has been deleted from your account.",
    });
  };
  
  const setAsDefault = (id: string) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
    
    toast({
      title: "Default address updated",
      description: "Your default shipping address has been updated.",
    });
  };
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="flex items-center justify-between mb-10 animate-slide-up">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link to="/account" className="hover:text-foreground transition-colors">
                  My Account
                </Link>
                <span>/</span>
                <span className="text-foreground">Addresses</span>
              </div>
              <h1 className="text-3xl font-semibold">My Addresses</h1>
            </div>
            
            <Button
              onClick={() => {
                resetForm();
                setIsAddingNew(true);
              }}
              className="flex items-center gap-2"
              disabled={isAddingNew}
            >
              <Plus size={16} />
              Add New Address
            </Button>
          </div>
          
          {isAddingNew ? (
            <div className="bg-card rounded-xl shadow-sm p-6 md:p-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-xl font-medium mb-6">
                {isEditing ? 'Edit Address' : 'Add New Address'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        id="name"
                        name="name"
                        value={newAddress.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                      <Input
                        id="phone"
                        name="phone"
                        value={newAddress.phone}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="street">Street Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                    <Textarea
                      id="street"
                      name="street"
                      value={newAddress.street}
                      onChange={handleInputChange}
                      placeholder="Street address, P.O. box, company name, c/o"
                      className="pl-10 min-h-[80px]"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={newAddress.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input
                      id="state"
                      name="state"
                      value={newAddress.state}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      placeholder="ZIP/Postal code"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Address Type</Label>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                        newAddress.type === 'home' 
                          ? 'bg-primary/10 border-primary text-primary' 
                          : 'border-input hover:border-primary/50'
                      }`}
                      onClick={() => handleTypeSelect('home')}
                    >
                      <Home size={16} />
                      <span>Home</span>
                    </button>
                    
                    <button
                      type="button"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                        newAddress.type === 'work' 
                          ? 'bg-primary/10 border-primary text-primary' 
                          : 'border-input hover:border-primary/50'
                      }`}
                      onClick={() => handleTypeSelect('work')}
                    >
                      <Building size={16} />
                      <span>Work</span>
                    </button>
                    
                    <button
                      type="button"
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                        newAddress.type === 'other' 
                          ? 'bg-primary/10 border-primary text-primary' 
                          : 'border-input hover:border-primary/50'
                      }`}
                      onClick={() => handleTypeSelect('other')}
                    >
                      <MapPin size={16} />
                      <span>Other</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isDefault"
                    checked={newAddress.isDefault}
                    onChange={handleDefaultChange}
                    className="rounded border-input h-4 w-4 text-primary focus:ring-primary/20"
                  />
                  <Label htmlFor="isDefault" className="cursor-pointer">
                    Set as default address
                  </Label>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1">
                    {isEditing ? 'Update Address' : 'Save Address'}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={resetForm}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addresses.map((address, index) => (
                <div 
                  key={address.id} 
                  className="bg-card rounded-xl shadow-sm p-6 border border-border hover:border-primary transition-all animate-slide-up"
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 mb-3">
                      {address.type === 'home' && <Home size={16} className="text-primary" />}
                      {address.type === 'work' && <Building size={16} className="text-primary" />}
                      {address.type === 'other' && <MapPin size={16} className="text-primary" />}
                      <span className="font-medium capitalize">{address.type}</span>
                      
                      {address.isDefault && (
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(address.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      >
                        <Edit size={16} />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(address.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="font-medium">{address.name}</p>
                    <p className="text-sm text-muted-foreground">{address.street}</p>
                    <p className="text-sm text-muted-foreground">
                      {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p className="text-sm text-muted-foreground pt-1">Phone: {address.phone}</p>
                  </div>
                  
                  {!address.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAsDefault(address.id)}
                      className="mt-4 text-xs h-8"
                    >
                      <Check size={14} className="mr-1" />
                      Set as Default
                    </Button>
                  )}
                </div>
              ))}
              
              {addresses.length === 0 && (
                <div className="col-span-full bg-card rounded-xl shadow-sm p-8 text-center animate-slide-up" style={{ animationDelay: '100ms' }}>
                  <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Addresses Found</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't added any delivery addresses yet.
                  </p>
                  <Button
                    onClick={() => setIsAddingNew(true)}
                    className="flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Add New Address
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddressPage;
