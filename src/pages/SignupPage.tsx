
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';
import { toast } from '../hooks/use-toast';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Validation Error",
        description: "Passwords do not match.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password.length < 8) {
      toast({
        title: "Validation Error",
        description: "Password must be at least 8 characters.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      // In a real app, this would be an API call to register
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Successful registration
      toast({
        title: "Registration successful",
        description: "Welcome to Bookopia! You can now browse and shop for books.",
      });
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "An error occurred during registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignup = () => {
    setIsLoading(true);
    
    // Simulate Google signup
    setTimeout(() => {
      toast({
        title: "Google signup successful",
        description: "Welcome to Bookopia!",
      });
      
      navigate('/');
      setIsLoading(false);
    }, 1500);
  };
  
  // Password strength checker
  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, label: '' };
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const criteriaCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars].filter(Boolean).length;
    
    if (password.length < 8) {
      return {
        strength: 1,
        label: 'Weak',
        color: 'bg-red-500',
      };
    } else if (criteriaCount === 2) {
      return {
        strength: 2,
        label: 'Fair',
        color: 'bg-orange-500',
      };
    } else if (criteriaCount === 3) {
      return {
        strength: 3,
        label: 'Good',
        color: 'bg-yellow-500',
      };
    } else if (criteriaCount === 4) {
      return {
        strength: 4,
        label: 'Strong',
        color: 'bg-green-500',
      };
    }
    
    return {
      strength: 1,
      label: 'Weak',
      color: 'bg-red-500',
    };
  };
  
  const passwordStrength = getPasswordStrength(formData.password);
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 flex items-center justify-center px-4">
        <div className="w-full max-w-md animate-slide-up">
          <div className="bg-card my-10 mb-40 md:my-20 rounded-xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-semibold">Create an account</h1>
                <p className="text-muted-foreground mt-2">
                  Sign up to start shopping for books
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex space-x-1 flex-grow">
                          {[1, 2, 3, 4].map((segment) => (
                            <div
                              key={segment}
                              className={`h-2 flex-grow rounded-full ${
                                segment <= passwordStrength.strength
                                  ? passwordStrength.color
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs ml-2">
                          {passwordStrength.label}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center text-xs">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center 
                            ${
                              formData.password.length >= 8
                                ? "bg-green-500"
                                : "bg-muted"
                            }`}
                          >
                            {formData.password.length >= 8 && (
                              <Check className="h-2 w-2 text-white" />
                            )}
                          </div>
                          <span>Min. 8 characters</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center 
                            ${
                              /[A-Z]/.test(formData.password)
                                ? "bg-green-500"
                                : "bg-muted"
                            }`}
                          >
                            {/[A-Z]/.test(formData.password) && (
                              <Check className="h-2 w-2 text-white" />
                            )}
                          </div>
                          <span>Uppercase letter</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center 
                            ${
                              /\d/.test(formData.password)
                                ? "bg-green-500"
                                : "bg-muted"
                            }`}
                          >
                            {/\d/.test(formData.password) && (
                              <Check className="h-2 w-2 text-white" />
                            )}
                          </div>
                          <span>Number</span>
                        </div>
                        <div className="flex items-center text-xs">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 flex items-center justify-center 
                            ${
                              /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
                                ? "bg-green-500"
                                : "bg-muted"
                            }`}
                          >
                            {/[!@#$%^&*(),.?":{}|<>]/.test(
                              formData.password
                            ) && <Check className="h-2 w-2 text-white" />}
                          </div>
                          <span>Special character</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`pl-10 ${
                        formData.confirmPassword &&
                        formData.password !== formData.confirmPassword
                          ? "border-red-500 focus-visible:ring-red-300"
                          : ""
                      }`}
                      required
                    />
                  </div>
                  {formData.confirmPassword &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        Passwords don't match
                      </p>
                    )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignup}
                disabled={isLoading}
              >
                <svg
                  className="mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="#EA4335"
                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2970142 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                  />
                  <path
                    fill="#4A90E2"
                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>

            <div className="p-8 bg-muted/30 border-t">
              <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignupPage;
