
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import InvoiceDocument from './invoice/InvoiceDocument';
import { Order } from '@/types/order';
import { toast } from '@/hooks/use-toast';

const generateInvoice = async (order: Order) => {
  try {
    const blob = await pdf(<InvoiceDocument order={order} />).toBlob();
    return blob;
  } catch (error) {
    console.error('Error generating invoice:', error);
    toast({
      title: "Error",
      description: "Could not generate the invoice. Please try again later.",
      variant: "destructive",
    });
    throw error;
  }
};

export const downloadInvoice = async (order: Order) => {
  try {
    const blob = await generateInvoice(order);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bookopia-invoice-${order.id}.pdf`;
    link.click();
    
    // Clean up the URL object after download
    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 1000);
    
    return true;
  } catch (error) {
    console.error('Error downloading invoice:', error);
    return false;
  }
};

export default {
  downloadInvoice,
  generateInvoice,
};
