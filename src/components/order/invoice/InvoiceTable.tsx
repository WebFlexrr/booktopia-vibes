
import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { OrderItem } from '@/types/order';

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    padding: 8,
    fontWeight: 'bold',
    fontSize: 10,
    color: '#333333',
    fontFamily: 'Helvetica-Bold',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 8,
    fontSize: 10,
    color: '#333333',
    fontFamily: 'Helvetica',
  },
  col1: { width: '40%' },
  col2: { width: '20%' },
  col3: { width: '15%' },
  col4: { width: '10%' },
  col5: { width: '15%' },
});

interface InvoiceTableProps {
  items: OrderItem[];
}

const InvoiceTable = ({ items }: InvoiceTableProps) => (
  <>
    <View style={styles.tableHeader}>
      <Text style={styles.col1}>Item</Text>
      <Text style={styles.col2}>Author</Text>
      <Text style={styles.col3}>Price</Text>
      <Text style={styles.col4}>Qty</Text>
      <Text style={styles.col5}>Total</Text>
    </View>
    
    {items.map((item, index) => (
      <View key={index} style={styles.tableRow}>
        <Text style={styles.col1}>{item.title}</Text>
        <Text style={styles.col2}>{item.author}</Text>
        <Text style={styles.col3}>${item.price.toFixed(2)}</Text>
        <Text style={styles.col4}>{item.quantity}</Text>
        <Text style={styles.col5}>${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    ))}
  </>
);

export default InvoiceTable;
