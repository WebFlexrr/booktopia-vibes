
import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

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

const generateInvoice = (order: Order) => {
  const doc = new jsPDF();

  // Add bookopia logo/header
  doc.setFontSize(20);
  doc.setTextColor(33, 33, 33);
  doc.text('bookopia', 14, 22);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('123 Bookopia Street, Reading, NY 10001', 14, 30);
  doc.text('support@bookopia.com | +1 (555) 123-4567', 14, 35);

  // Add line separator
  doc.setDrawColor(200, 200, 200);
  doc.line(14, 40, 196, 40);

  // Invoice details
  doc.setFontSize(16);
  doc.setTextColor(33, 33, 33);
  doc.text('INVOICE', 14, 50);

  doc.setFontSize(10);
  doc.text(`Invoice Number: INV-${order.id.replace('ORD-', '')}`, 14, 60);
  doc.text(`Order Number: ${order.id}`, 14, 65);
  doc.text(`Date: ${order.date}`, 14, 70);
  doc.text(`Status: ${order.status}`, 14, 75);

  // Customer Information (placeholder - in a real app, you'd use actual customer data)
  doc.setFontSize(12);
  doc.text('Bill To:', 140, 60);
  doc.setFontSize(10);
  doc.text('John Doe', 140, 65);
  doc.text('customer@email.com', 140, 70);
  doc.text('123 Customer Street', 140, 75);
  doc.text('New York, NY 10001', 140, 80);

  // Create table for order items
  const tableColumn = ["Item", "Author", "Price", "Qty", "Total"];
  const tableRows: any[] = [];

  // Add rows for each book in the order
  order.items.forEach(item => {
    const itemData = [
      item.title,
      item.author,
      `$${item.price.toFixed(2)}`,
      item.quantity,
      `$${(item.price * item.quantity).toFixed(2)}`,
    ];
    tableRows.push(itemData);
  });

  // Generate the table with items
  (doc as any).autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 90,
    theme: 'grid',
    headStyles: {
      fillColor: [100, 100, 100],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    styles: {
      halign: 'left',
      valign: 'middle',
      fontSize: 9,
      cellPadding: 3,
    },
    columnStyles: {
      0: { cellWidth: 60 },  // Title
      1: { cellWidth: 40 },  // Author
      2: { cellWidth: 25 },  // Price
      3: { cellWidth: 15 },  // Quantity
      4: { cellWidth: 25 },  // Total
    },
  });

  // Add order summary
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  
  doc.setFontSize(10);
  doc.text('Subtotal:', 140, finalY);
  doc.text(`$${order.total.toFixed(2)}`, 175, finalY);
  
  doc.text('Shipping:', 140, finalY + 5);
  doc.text('Free', 175, finalY + 5);
  
  doc.text('Tax:', 140, finalY + 10);
  doc.text('$0.00', 175, finalY + 10);
  
  doc.setDrawColor(200, 200, 200);
  doc.line(140, finalY + 12, 196, finalY + 12);
  
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.text('Total:', 140, finalY + 18);
  doc.text(`$${order.total.toFixed(2)}`, 175, finalY + 18);

  // Add footer
  doc.setFontSize(9);
  doc.setFont(undefined, 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('Thank you for shopping with Bookopia!', 14, finalY + 30);
  doc.text('Payment received. This is a computer-generated document, no signature is required.', 14, finalY + 35);

  return doc.output('blob');
};

export const downloadInvoice = (order: Order) => {
  const blob = generateInvoice(order);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `bookopia-invoice-${order.id}.pdf`;
  link.click();
};

export default {
  downloadInvoice,
  generateInvoice,
};
