
import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
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
    fontFamily: 'Helvetica',
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
    fontFamily: 'Helvetica-Bold',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginVertical: 15,
  },
});

interface InvoiceTotalProps {
  total: number;
}

const InvoiceTotal = ({ total }: InvoiceTotalProps) => (
  <View style={styles.totalSection}>
    <View style={styles.totalRow}>
      <Text style={styles.totalLabel}>Subtotal:</Text>
      <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
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
      <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
    </View>
  </View>
);

export default InvoiceTotal;
