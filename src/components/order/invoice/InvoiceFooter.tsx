
import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    marginTop: 50,
    fontSize: 9,
    color: '#666666',
    textAlign: 'center',
  },
});

const InvoiceFooter = () => (
  <View style={styles.footer}>
    <Text>Thank you for shopping with Bookopia!</Text>
    <Text>Payment received. This is a computer-generated document, no signature is required.</Text>
  </View>
);

export default InvoiceFooter;
