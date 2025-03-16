
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Receipt } from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Receipt className="text-primary" size={32} />
              <h1 className="text-3xl font-bold">Refund Policy</h1>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="lead text-lg text-foreground">Last updated: May 15, 2024</p>
              
              <p>At Bookopia, we want you to be completely satisfied with your purchase. If you're not, we're here to help with returns and refunds.</p>
              
              <h2>Return Eligibility</h2>
              <p>You may return items purchased from Bookopia within 30 days of delivery for a full refund, provided that:</p>
              <ul>
                <li>Items are in their original condition</li>
                <li>Books have no visible damage, markings, or signs of use</li>
                <li>All original packaging is intact, including any shrink wrap or seals</li>
                <li>You have proof of purchase (order number, receipt, etc.)</li>
              </ul>
              
              <p>The following items cannot be returned:</p>
              <ul>
                <li>Digital products (e-books, audiobooks)</li>
                <li>Gift cards</li>
                <li>Items marked as "final sale" or "non-returnable"</li>
                <li>Items that have been personalized or custom-ordered</li>
              </ul>
              
              <h2>Return Process</h2>
              <p>To initiate a return:</p>
              <ol>
                <li>Log in to your Bookopia account and navigate to your order history</li>
                <li>Select the order containing the item(s) you wish to return</li>
                <li>Click "Return Items" and follow the instructions</li>
                <li>Print the prepaid return shipping label (if applicable)</li>
                <li>Package the item(s) securely with all original materials</li>
                <li>Attach the return shipping label to the outside of the package</li>
                <li>Drop off the package at the designated shipping carrier</li>
              </ol>
              
              <h2>Refund Timeline</h2>
              <p>Once we receive your returned item(s), our team will inspect them to ensure they meet our return policy requirements. If approved:</p>
              <ul>
                <li>Refunds will be issued to the original payment method used for the purchase</li>
                <li>Credit card refunds typically take 5-7 business days to process</li>
                <li>Bank transfers may take 7-10 business days to appear in your account</li>
                <li>Store credit refunds are processed immediately</li>
              </ul>
              
              <p>You will receive an email notification when your refund has been processed.</p>
              
              <h2>Return Shipping Costs</h2>
              <p>If the return is due to our error (you received an incorrect or defective item), we will cover the return shipping costs and issue a full refund.</p>
              
              <p>For returns due to change of mind or other non-error reasons, the customer is responsible for return shipping costs, and a $3.99 return processing fee may be deducted from your refund.</p>
              
              <h2>Damaged or Defective Items</h2>
              <p>If you receive a damaged or defective item, please contact our customer service team within 48 hours of delivery. We may request photos of the damage to process your claim more efficiently.</p>
              
              <h2>Exchanges</h2>
              <p>We do not process direct exchanges. If you would like to exchange an item, please return the original item for a refund and place a new order for the desired item.</p>
              
              <h2>Late or Missing Refunds</h2>
              <p>If you haven't received your refund within the expected timeframe:</p>
              <ul>
                <li>Check your bank account or credit card statement again</li>
                <li>Contact your credit card company or bank, as it may take some time for the refund to be officially posted</li>
                <li>If you've done all of this and still haven't received your refund, please contact our customer service team</li>
              </ul>
              
              <h2>Changes to This Policy</h2>
              <p>We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website.</p>
              
              <h2>Contact Us</h2>
              <p>If you have any questions about our Refund Policy, please contact us at:</p>
              <p>Email: returns@bookopia.com<br />
              Address: 123 Bookopia Street, Reading, NY 10001<br />
              Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
