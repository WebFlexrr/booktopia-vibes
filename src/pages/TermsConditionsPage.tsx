
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FileText } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="text-primary" size={32} />
              <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="lead text-lg text-foreground">Last updated: May 15, 2024</p>
              
              <p>Welcome to Bookopia. By accessing or using our website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              
              <h2>Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Bookopia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on Bookopia's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              
              <h2>Account Registration</h2>
              <p>To use certain features of our website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
              
              <h2>Orders and Payments</h2>
              <p>When you place an order through our website, you are making an offer to purchase the products you have selected. We reserve the right to refuse or cancel any orders for any reason, including but not limited to:</p>
              <ul>
                <li>Product availability</li>
                <li>Errors in product descriptions or pricing</li>
                <li>Errors in your order</li>
                <li>Suspected fraudulent activity</li>
              </ul>
              
              <p>Payment must be received prior to the acceptance of an order. We accept various payment methods as indicated on our website.</p>
              
              <h2>Shipping and Delivery</h2>
              <p>Delivery times are estimates only and commence from the date of shipping, not the date of order. We are not responsible for delays that are beyond our control.</p>
              
              <h2>Returns and Refunds</h2>
              <p>Please refer to our separate Refund Policy for information about returns, exchanges, and refunds.</p>
              
              <h2>Product Descriptions</h2>
              <p>We strive to be as accurate as possible with our product descriptions. However, we do not warrant that product descriptions or other content on the website are accurate, complete, reliable, current, or error-free.</p>
              
              <h2>Intellectual Property</h2>
              <p>The content, organization, graphics, design, compilation, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, or publication of any such content is strictly prohibited without our express written consent.</p>
              
              <h2>Limitation of Liability</h2>
              <p>In no event shall Bookopia, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website, products, or services.</p>
              
              <h2>Governing Law</h2>
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of the state of New York, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
              
              <h2>Changes to Terms</h2>
              <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of the website after such modifications will constitute your acknowledgment and agreement to the modified terms.</p>
              
              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
              <p>Email: legal@bookopia.com<br />
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

export default TermsConditionsPage;
