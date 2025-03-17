
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import ReactPDFInvoice from './ReactPDFInvoice';

interface OrderItem {
  id: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
}

const generateInvoice = async (order: Order) => {
  try {
    const blob = await pdf(<ReactPDFInvoice order={order} />).toBlob();
    return blob;
  } catch (error) {
    console.error('Error generating invoice:', error);
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
  } catch (error) {
    console.error('Error downloading invoice:', error);
    throw error;
  }
};

export default {
  downloadInvoice,
  generateInvoice,
};
