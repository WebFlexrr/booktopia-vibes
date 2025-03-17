
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '../ui/button';
import InvoiceDocument from './invoice/InvoiceDocument';
import { Order } from '@/types/order';

interface ReactPDFInvoiceProps {
  order: Order;
}

const ReactPDFInvoice = ({ order }: ReactPDFInvoiceProps) => {
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
          <Button>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Download Invoice
          </Button>
        )
      )}
    </PDFDownloadLink>
  );
};

export default ReactPDFInvoice;
