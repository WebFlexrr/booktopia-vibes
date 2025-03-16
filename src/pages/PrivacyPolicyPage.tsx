
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="text-primary" size={32} />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            
            <div className="prose prose-sm max-w-none text-muted-foreground">
              <p className="lead text-lg text-foreground">Last updated: May 15, 2024</p>
              
              <p>At Bookopia, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make purchases from our store.</p>
              
              <h2>Information We Collect</h2>
              <p>We collect information that you provide directly to us when you:</p>
              <ul>
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Sign up for our newsletter</li>
                <li>Contact customer service</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              
              <p>This information may include:</p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Billing and shipping address</li>
                <li>Payment information (though we do not store complete credit card numbers)</li>
                <li>Account passwords</li>
                <li>Order history and preferences</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Process and fulfill your orders</li>
                <li>Manage your account</li>
                <li>Send transactional emails (order confirmations, shipping updates)</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (if you've opted in)</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              
              <h2>Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
              
              <h2>Sharing Your Information</h2>
              <p>We may share your personal information with:</p>
              <ul>
                <li>Service providers who help us operate our business (payment processors, shipping companies)</li>
                <li>Professional advisors (lawyers, accountants, insurers)</li>
                <li>Government bodies when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>We have implemented appropriate security measures to protect the security of your personal information. However, please be aware that no security measures are perfect or impenetrable.</p>
              
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
              
              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p>Email: privacy@bookopia.com<br />
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

export default PrivacyPolicyPage;
