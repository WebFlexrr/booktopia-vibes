
import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Font } from '@react-pdf/renderer';

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

// Register font
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Inter',
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  contactInfo: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  invoiceInfoContainer: {
    marginBottom: 20,
  },
  invoiceInfo: {
    fontSize: 10,
    marginBottom: 3,
    color: '#333333',
  },
  twoColumnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    padding: 8,
    fontWeight: 'bold',
    fontSize: 10,
    color: '#333333',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 8,
    fontSize: 10,
    color: '#333333',
  },
  col1: { width: '40%' },
  col2: { width: '20%' },
  col3: { width: '15%' },
  col4: { width: '10%' },
  col5: { width: '15%' },
  totalSection: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: 5,
    fontSize: 10,
  },
  totalLabel: {
    textAlign: 'right',
  },
  totalValue: {
    textAlign: 'right',
  },
  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 50,
    fontSize: 9,
    color: '#666666',
    textAlign: 'center',
  },
});

// Create Invoice document
const InvoiceDocument = ({ order }: { order: Order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>bookopia</Text>
        <Text style={styles.contactInfo}>123 Bookopia Street, Reading, NY 10001</Text>
        <Text style={styles.contactInfo}>support@bookopia.com | +1 (555) 123-4567</Text>
      </View>
      
      <View style={styles.separator} />
      
      {/* Invoice Title */}
      <Text style={styles.sectionTitle}>INVOICE</Text>
      
      {/* Invoice Information and Customer Details */}
      <View style={styles.twoColumnLayout}>
        <View style={styles.invoiceInfoContainer}>
          <Text style={styles.invoiceInfo}>Invoice Number: INV-{order.id.replace('ORD-', '')}</Text>
          <Text style={styles.invoiceInfo}>Order Number: {order.id}</Text>
          <Text style={styles.invoiceInfo}>Date: {order.date}</Text>
          <Text style={styles.invoiceInfo}>Status: {order.status}</Text>
        </View>
        
        <View style={styles.invoiceInfoContainer}>
          <Text style={[styles.invoiceInfo, { fontWeight: 'bold' }]}>Bill To:</Text>
          <Text style={styles.invoiceInfo}>John Doe</Text>
          <Text style={styles.invoiceInfo}>customer@email.com</Text>
          <Text style={styles.invoiceInfo}>123 Customer Street</Text>
          <Text style={styles.invoiceInfo}>New York, NY 10001</Text>
        </View>
      </View>
      
      {/* Item Table */}
      <View style={styles.tableHeader}>
        <Text style={styles.col1}>Item</Text>
        <Text style={styles.col2}>Author</Text>
        <Text style={styles.col3}>Price</Text>
        <Text style={styles.col4}>Qty</Text>
        <Text style={styles.col5}>Total</Text>
      </View>
      
      {order.items.map((item, index) => (
        <View key={index} style={styles.tableRow}>
          <Text style={styles.col1}>{item.title}</Text>
          <Text style={styles.col2}>{item.author}</Text>
          <Text style={styles.col3}>${item.price.toFixed(2)}</Text>
          <Text style={styles.col4}>{item.quantity}</Text>
          <Text style={styles.col5}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      ))}
      
      {/* Total Section */}
      <View style={styles.totalSection}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal:</Text>
          <Text style={styles.totalValue}>${order.total.toFixed(2)}</Text>
        </View>
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping:</Text>
          <Text style={styles.totalValue}>Free</Text>
        </View>
        
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Tax:</Text>
          <Text style={styles.totalValue}>$0.00</Text>
        </View>
        
        <View style={styles.separator} />
        
        <View style={styles.grandTotal}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>${order.total.toFixed(2)}</Text>
        </View>
      </View>
      
      {/* Footer */}
      <View style={styles.footer}>
        <Text>Thank you for shopping with Bookopia!</Text>
        <Text>Payment received. This is a computer-generated document, no signature is required.</Text>
      </View>
    </Page>
  </Document>
);

// Invoice download button component
const ReactPDFInvoice = ({ order }: { order: Order }) => {
  const fileName = `bookopia-invoice-${order.id}.pdf`;

  return (
    <PDFDownloadLink 
      document={<InvoiceDocument order={order} />} 
      fileName={fileName}
      style={{ 
        textDecoration: 'none',
        backgroundColor: 'white',
        border: '1px solid rgb(229, 231, 235)',
        color: 'rgb(107, 114, 128)',
        padding: '0.5rem 0.75rem',
        borderRadius: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {({ loading }) => (
        loading ? 'Preparing document...' : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Invoice
          </>
        )
      )}
    </PDFDownloadLink>
  );
};

export default ReactPDFInvoice;
