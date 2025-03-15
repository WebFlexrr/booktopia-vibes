
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ShoppingBag, Package, Calendar, ChevronRight, FileText, Download } from 'lucide-react';

// Mock order data
const orders = [
  {
    id: 'ORD-5432178',
    date: 'June 12, 2023',
    total: 86.97,
    status: 'Delivered',
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
      {
        id: '3',
        title: '1984',
        author: 'George Orwell',
        coverImage: '/placeholder.svg',
        price: 8.99,
        quantity: 6,
      },
    ],
  },
  {
    id: 'ORD-3216548',
    date: 'May 28, 2023',
    total: 42.97,
    status: 'Delivered',
    items: [
      {
        id: '4',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        coverImage: '/placeholder.svg',
        price: 11.99,
        quantity: 1,
      },
      {
        id: '5',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        coverImage: '/placeholder.svg',
        price: 7.99,
        quantity: 1,
      },
      {
        id: '6',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        coverImage: '/placeholder.svg',
        price: 10.99,
        quantity: 2,
      },
    ],
  },
];

const OrderStatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'Delivered':
      return <Badge className="bg-green-500">Delivered</Badge>;
    case 'Processing':
      return <Badge className="bg-blue-500">Processing</Badge>;
    case 'Cancelled':
      return <Badge variant="destructive">Cancelled</Badge>;
    case 'Shipped':
      return <Badge className="bg-amber-500">Shipped</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const OrdersPage = () => {
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
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
                <span className="text-foreground">Order History</span>
              </div>
              <h1 className="text-3xl font-semibold">My Orders</h1>
            </div>
          </div>

          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div 
                  key={order.id}
                  className="bg-card rounded-xl shadow-sm overflow-hidden border border-border animate-slide-up"
                  style={{ animationDelay: `${100 + index * 50}ms` }}
                >
                  <div 
                    className="p-6 cursor-pointer hover:bg-accent/50 transition-colors"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-2.5 text-primary">
                          <ShoppingBag size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">{order.id}</h3>
                            <OrderStatusBadge status={order.status} />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>Ordered on {order.date}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Total Amount</p>
                          <p className="font-medium">${order.total.toFixed(2)}</p>
                        </div>
                        <ChevronRight 
                          size={20} 
                          className={`text-muted-foreground transition-transform ${
                            expandedOrder === order.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </div>

                  {expandedOrder === order.id && (
                    <div className="px-6 pb-6 animate-slide-down">
                      <Separator className="mb-4" />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Order Details</h4>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-xs h-8">
                              <FileText size={14} className="mr-1.5" />
                              View Invoice
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs h-8">
                              <Download size={14} className="mr-1.5" />
                              Download
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                              <div className="bg-muted rounded-md h-16 w-12 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <img 
                                  src={item.coverImage} 
                                  alt={item.title} 
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h5 className="font-medium text-sm">{item.title}</h5>
                                <p className="text-xs text-muted-foreground">{item.author}</p>
                              </div>
                              <div className="text-sm text-right">
                                <p>${item.price.toFixed(2)}</p>
                                <p className="text-muted-foreground">Qty: {item.quantity}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="bg-muted/40 rounded-lg p-4 mt-4">
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
                            <Separator className="my-2" />
                            <div className="flex justify-between font-medium">
                              <span>Total</span>
                              <span>${order.total.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end mt-4">
                          <Button>
                            <Package size={16} className="mr-2" />
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-xl shadow-sm p-8 text-center animate-slide-up">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <ShoppingBag size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Orders Found</h3>
              <p className="text-muted-foreground mb-6">
                You haven't placed any orders yet.
              </p>
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
