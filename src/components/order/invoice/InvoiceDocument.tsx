
import React from 'react';
import { Document, Page, StyleSheet } from '@react-pdf/renderer';
import { Order } from '@/types/order';
import InvoiceHeader from './InvoiceHeader';
import InvoiceInfo from './InvoiceInfo';
import InvoiceTable from './InvoiceTable';
import InvoiceTotal from './InvoiceTotal';
import InvoiceFooter from './InvoiceFooter';

// Create styles - removing font registration which is causing the error
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica', // Using a built-in font instead of a web font
  },
});

interface InvoiceDocumentProps {
  order: Order;
}

const InvoiceDocument = ({ order }: InvoiceDocumentProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <InvoiceHeader />
      <InvoiceInfo order={order} />
      <InvoiceTable items={order.items} />
      <InvoiceTotal total={order.total} />
      <InvoiceFooter />
    </Page>
  </Document>
);

export default InvoiceDocument;
