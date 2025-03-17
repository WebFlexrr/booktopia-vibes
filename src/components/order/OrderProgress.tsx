
import React from 'react';
import { Check, Clock, Package, ShoppingBag, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

export interface OrderStatus {
  current: 'ordered' | 'processing' | 'shipped' | 'delivered';
}

const OrderProgress = ({ current }: OrderStatus) => {
  // Map status to progress percentage
  const progressMap = {
    ordered: 25,
    processing: 50,
    shipped: 75,
    delivered: 100,
  };

  const progress = progressMap[current];

  // Determine which steps are completed
  const isProcessing = ['processing', 'shipped', 'delivered'].includes(current);
  const isShipped = ['shipped', 'delivered'].includes(current);
  const isDelivered = ['delivered'].includes(current);

  return (
    <div className="w-full space-y-4">
      <Progress value={progress} className="h-2" />
      
      <div className="grid grid-cols-4 gap-2">
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mb-2",
            "bg-primary/10 text-primary"
          )}>
            <ShoppingBag size={20} />
          </div>
          <span className="text-sm font-medium">Ordered</span>
          <span className="text-xs text-muted-foreground">Confirmed</span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mb-2",
            isProcessing 
              ? "bg-primary/10 text-primary" 
              : "bg-muted text-muted-foreground"
          )}>
            {isProcessing ? <Check size={20} /> : <Clock size={20} />}
          </div>
          <span className={cn(
            "text-sm font-medium",
            !isProcessing && "text-muted-foreground"
          )}>Processing</span>
          <span className="text-xs text-muted-foreground">
            {isProcessing ? "Completed" : "Pending"}
          </span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mb-2",
            isShipped 
              ? "bg-primary/10 text-primary" 
              : "bg-muted text-muted-foreground"
          )}>
            {isShipped ? <Check size={20} /> : <Package size={20} />}
          </div>
          <span className={cn(
            "text-sm font-medium",
            !isShipped && "text-muted-foreground"
          )}>Shipped</span>
          <span className="text-xs text-muted-foreground">
            {isShipped ? "On the way" : "Pending"}
          </span>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mb-2",
            isDelivered 
              ? "bg-primary/10 text-primary" 
              : "bg-muted text-muted-foreground"
          )}>
            {isDelivered ? <Check size={20} /> : <Truck size={20} />}
          </div>
          <span className={cn(
            "text-sm font-medium",
            !isDelivered && "text-muted-foreground"
          )}>Delivered</span>
          <span className="text-xs text-muted-foreground">
            {isDelivered ? "Completed" : "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
