
import React from 'react';
import { Document, Page, StyleSheet, Font } from '@react-pdf/renderer';
import { Order } from '@/types/order';
import InvoiceHeader from './InvoiceHeader';
import InvoiceInfo from './InvoiceInfo';
import InvoiceTable from './InvoiceTable';
import InvoiceTotal from './InvoiceTotal';
import InvoiceFooter from './InvoiceFooter';

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
