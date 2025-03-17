
import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
    fontFamily: 'Helvetica-Bold',
  },
  contactInfo: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 5,
    fontFamily: 'Helvetica',
  },
});

const InvoiceHeader = () => (
  <View style={styles.header}>
    <Text style={styles.logo}>bookopia</Text>
    <Text style={styles.contactInfo}>123 Bookopia Street, Reading, NY 10001</Text>
    <Text style={styles.contactInfo}>support@bookopia.com | +1 (555) 123-4567</Text>
  </View>
);

export default InvoiceHeader;
