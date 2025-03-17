
import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { Order } from '@/types/order';

const styles = StyleSheet.create({
  twoColumnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invoiceInfoContainer: {
    marginBottom: 20,
  },
  invoiceInfo: {
    fontSize: 10,
    marginBottom: 3,
    color: '#333333',
    fontFamily: 'Helvetica',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    fontFamily: 'Helvetica-Bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginVertical: 15,
  },
  boldText: {
    fontFamily: 'Helvetica-Bold',
  },
});

interface InvoiceInfoProps {
  order: Order;
}

const InvoiceInfo = ({ order }: InvoiceInfoProps) => (
  <>
    <View style={styles.separator} />
    
    <Text style={styles.sectionTitle}>INVOICE</Text>
    
    <View style={styles.twoColumnLayout}>
      <View style={styles.invoiceInfoContainer}>
        <Text style={styles.invoiceInfo}>Invoice Number: INV-{order.id.replace('ORD-', '')}</Text>
        <Text style={styles.invoiceInfo}>Order Number: {order.id}</Text>
        <Text style={styles.invoiceInfo}>Date: {order.date}</Text>
        <Text style={styles.invoiceInfo}>Status: {order.status}</Text>
      </View>
      
      <View style={styles.invoiceInfoContainer}>
        <Text style={[styles.invoiceInfo, styles.boldText]}>Bill To:</Text>
        <Text style={styles.invoiceInfo}>John Doe</Text>
        <Text style={styles.invoiceInfo}>customer@email.com</Text>
        <Text style={styles.invoiceInfo}>123 Customer Street</Text>
        <Text style={styles.invoiceInfo}>New York, NY 10001</Text>
      </View>
    </View>
  </>
);

export default InvoiceInfo;
