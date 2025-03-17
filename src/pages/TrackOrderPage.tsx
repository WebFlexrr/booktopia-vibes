
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Calendar, MapPin, Package, Phone, ShoppingBag, Truck } from 'lucide-react';
import OrderProgress from '@/components/order/OrderProgress';

// Sample order data
const orderData = {
  id: 'ORD-5432178',
  date: 'June 12, 2023',
  status: 'shipped',
  estimatedDelivery: 'June 18, 2023',
  trackingNumber: 'TRK123456789',
  shippingCarrier: 'BookExpress Delivery',
  shippingAddress: '123 Reading Lane, Bookville, NY 10001',
  recipientName: 'John Doe',
  recipientPhone: '+1 (555) 123-4567',
  updates: [
    { date: 'June 15, 2023', time: '14:30', status: 'Shipped', message: 'Your order has been shipped' },
    { date: 'June 14, 2023', time: '10:15', status: 'Processing', message: 'Your order is being processed' },
    { date: 'June 12, 2023', time: '09:45', status: 'Ordered', message: 'Order confirmed' },
  ],
  items: [
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      coverImage: '/placeholder.svg',
      price: 12.99,
      quantity: 1,
    },
    {
      id: '2',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      coverImage: '/placeholder.svg',
      price: 9.99,
      quantity: 2,
    },
  ],
  total: 32.97
};

const TrackOrderPage = () => {
  // In a real app, you would fetch order data based on the order ID
  const { orderId } = useParams();
  const [order] = useState(orderData);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-12">
          <div className="flex items-center justify-between mb-8 animate-slide-up">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link to="/account/orders" className="hover:text-foreground transition-colors flex items-center gap-1">
                  <ArrowLeft size={14} />
                  <span>Back to Orders</span>
                </Link>
              </div>
              <h1 className="text-3xl font-semibold">Track Order</h1>
              <p className="text-muted-foreground">Order #{order.id}</p>
            </div>
            <Button variant="outline" asChild>
              <Link to={`/account/orders`}>
                View All Orders
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Tracker */}
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                  <CardDescription>
                    Estimated delivery by {order.estimatedDelivery}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <OrderProgress current={order.status as any} />
                </CardContent>
              </Card>

              {/* Shipping Details */}
              <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle>Shipping Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <Truck size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Delivery Information</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Carrier: {order.shippingCarrier}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Tracking Number: {order.trackingNumber}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Shipping Address</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {order.recipientName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {order.shippingAddress}
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 rounded-full p-2 text-primary">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">Contact Information</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {order.recipientPhone}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Order Updates */}
              <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                <CardHeader>
                  <CardTitle>Order Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.updates.map((update, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="relative">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            <Package size={16} className="text-primary-foreground" />
                          </div>
                          {index < order.updates.length - 1 && (
                            <div className="absolute top-8 bottom-0 left-1/2 w-0.5 bg-border -translate-x-1/2 h-full" />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{update.status}</h4>
                            <span className="text-xs text-muted-foreground">
                              {update.date}, {update.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {update.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>
                    Order placed on {order.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="bg-muted rounded-md h-16 w-12 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          <img 
                            src={item.coverImage} 
                            alt={item.title} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.author}</p>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </span>
                            <span className="text-sm">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax</span>
                        <span>$0.00</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="flex justify-center mt-4">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <Link to="/account/orders">
                          <ShoppingBag size={16} className="mr-2" />
                          View All Orders
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrderPage;
