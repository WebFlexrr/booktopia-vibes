
import React from 'react';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeInOut"
    }
  })
};

const benefits = [
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Best Prices & Offers",
    description: "On orders $50 or more",
    bgColor: "bg-rose-100",
    iconColor: "text-rose-500"
  },
  {
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    title: "Free Delivery",
    description: "24/7 amazing services",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500"
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Great Daily Deal",
    description: "When you sign up",
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-500"
  },
  {
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    title: "Easy Returns",
    description: "Within 30 days",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index}
            className={`flex items-center p-4 rounded-lg hover:bg-secondary/30 transition-colors`}
            initial="hidden"
            animate="visible"
            custom={index}
            variants={fadeInAnimationVariants}
          >
            <div className={`w-12 h-12 ${benefit.bgColor} rounded-full flex items-center justify-center ${benefit.iconColor} mr-3`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
