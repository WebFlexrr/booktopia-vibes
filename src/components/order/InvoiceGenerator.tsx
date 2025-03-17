
import React from 'react';
import { pdf } from '@react-pdf/renderer';
import InvoiceDocument from './invoice/InvoiceDocument';
import { Order } from '@/types/order';

const generateInvoice = async (order: Order) => {
  try {
    const blob = await pdf(<InvoiceDocument order={order} />).toBlob();
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
