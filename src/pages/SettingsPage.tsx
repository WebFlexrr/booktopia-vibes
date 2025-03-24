
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  ChevronRight, 
  Lock, 
  LogOut, 
  Mail,
  Eye,
  EyeOff
} from 'lucide-react';
import { toast } from '../hooks/use-toast';

const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  
  // Form states
  const [profileForm, setProfileForm] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  
  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: true,
    newReleases: false,
    recommendations: true
  });
  
  // Handle profile form input
  const handleProfileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle password form input
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle notification toggles
  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotifications(prev => ({ ...prev, [name]: checked }));
  };
  
  // Update profile
  const updateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  // Change password
  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "New password and confirm password must match.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Password changed",
      description: "Your password has been changed successfully.",
    });
    
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };
  
  // Toggle password visibility
  const togglePasswordVisibility = (field: 'current' | 'new' | 'confirm') => {
    setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
  };
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences</p>
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
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-2">
                  <button 
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === 'account' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                    onClick={() => setActiveTab('account')}
                  >
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </button>
                  
                  <button 
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === 'password' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                    onClick={() => setActiveTab('password')}
                  >
                    <Lock className="h-5 w-5" />
                    <span>Password</span>
                  </button>
                  
                  <button 
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === 'notifications' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                  </button>
                  
                  {/* <button 
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === 'payments' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                    onClick={() => navigate('/payment-methods')}
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Payment Methods</span>
                  </button>
                   */}
                  <button 
                    className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-colors ${
                      activeTab === 'privacy' ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                    }`}
                    onClick={() => setActiveTab('privacy')}
                  >
                    <Shield className="h-5 w-5" />
                    <span>Privacy & Security</span>
                  </button>
                  
                  <div className="px-3 py-2 mt-2">
                    <button 
                      className="w-full text-left p-3 rounded-lg flex items-center gap-3 text-red-500 hover:bg-red-50 transition-colors"
                      onClick={() => navigate('/login')}
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {activeTab === 'account' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Account Information</h2>
                  
                  <form onSubmit={updateProfile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={profileForm.name}
                        onChange={handleProfileInput}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={profileForm.email}
                        onChange={handleProfileInput}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={profileForm.phone}
                        onChange={handleProfileInput}
                      />
                    </div>
                    
                    <Button type="submit" className="mt-2">
                      Save Changes
                    </Button>
                  </form>
                </div>
              )}
              
              {activeTab === 'password' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Change Password</h2>
                  
                  <form onSubmit={changePassword} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="relative">
                        <Input 
                          id="currentPassword"
                          name="currentPassword"
                          type={showPassword.current ? "text" : "password"}
                          value={passwordForm.currentPassword}
                          onChange={handlePasswordInput}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => togglePasswordVisibility('current')}
                        >
                          {showPassword.current ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input 
                          id="newPassword"
                          name="newPassword"
                          type={showPassword.new ? "text" : "password"}
                          value={passwordForm.newPassword}
                          onChange={handlePasswordInput}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => togglePasswordVisibility('new')}
                        >
                          {showPassword.new ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <div className="relative">
                        <Input 
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showPassword.confirm ? "text" : "password"}
                          value={passwordForm.confirmPassword}
                          onChange={handlePasswordInput}
                          required
                        />
                        <button 
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          onClick={() => togglePasswordVisibility('confirm')}
                        >
                          {showPassword.confirm ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <Button type="submit" className="mt-2">
                      Update Password
                    </Button>
                  </form>
                </div>
              )}
              
              {activeTab === 'notifications' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="orderUpdates" className="text-base">Order Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about your order status
                        </p>
                      </div>
                      <Switch 
                        id="orderUpdates"
                        checked={notifications.orderUpdates}
                        onCheckedChange={(checked) => handleNotificationChange('orderUpdates', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="promotions" className="text-base">Promotions</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about sales and special offers
                        </p>
                      </div>
                      <Switch 
                        id="promotions"
                        checked={notifications.promotions}
                        onCheckedChange={(checked) => handleNotificationChange('promotions', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="newReleases" className="text-base">New Releases</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when new books are released
                        </p>
                      </div>
                      <Switch 
                        id="newReleases"
                        checked={notifications.newReleases}
                        onCheckedChange={(checked) => handleNotificationChange('newReleases', checked)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="recommendations" className="text-base">Recommendations</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive personalized book recommendations
                        </p>
                      </div>
                      <Switch 
                        id="recommendations"
                        checked={notifications.recommendations}
                        onCheckedChange={(checked) => handleNotificationChange('recommendations', checked)}
                      />
                    </div>
                    
                    <Button onClick={() => {
                      toast({
                        title: "Preferences saved",
                        description: "Your notification preferences have been updated.",
                      });
                    }}>
                      Save Preferences
                    </Button>
                  </div>
                </div>
              )}
              
              {activeTab === 'privacy' && (
                <div className="bg-card rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-6">Privacy & Security</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Data Collection</Label>
                            <p className="text-sm text-muted-foreground">
                              Allow us to collect data for personalized recommendations
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Share Reading Activity</Label>
                            <p className="text-sm text-muted-foreground">
                              Share your reading progress and activity with friends
                            </p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h3 className="text-lg font-medium mb-4">Security</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Two-Factor Authentication</Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account
                            </p>
                          </div>
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              toast({
                                title: "Coming soon",
                                description: "Two-factor authentication will be available soon.",
                              });
                            }}
                          >
                            Enable
                          </Button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base">Login Sessions</Label>
                            <p className="text-sm text-muted-foreground">
                              View and manage your active sessions
                            </p>
                          </div>
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              toast({
                                title: "All devices signed out",
                                description: "You've been signed out from all other devices.",
                              });
                            }}
                          >
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h3 className="text-lg font-medium mb-4">Data & Privacy</h3>
                      
                      <div className="space-y-4">
                        <Button 
                          variant="outline"
                          onClick={() => {
                            toast({
                              title: "Data requested",
                              description: "Your data export has been requested. You'll receive an email when it's ready.",
                            });
                          }}
                        >
                          Request Data Export
                        </Button>
                        
                        <Button 
                          variant="outline"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => {
                            toast({
                              title: "Request received",
                              description: "Your account deletion request has been received. We'll process it within 30 days.",
                              variant: "destructive"
                            });
                          }}
                        >
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
