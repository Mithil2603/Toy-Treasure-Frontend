import React, { useState } from 'react';
import { ChevronDown, ChevronUp,Heart,User,ShoppingCart,Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import r1 from './Logo.jpg';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "You can place an order by selecting the desired toy, adding it to your cart, and then proceeding to checkout. Payment options include credit card, debit card, and UPI.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental Gujarat. Express shipping options are available at checkout. International shipping times vary by destination."
    },
    {
      question: "Do you ship internationally?",
      answer: "No, we dont ship to  international destinations. Shipping costs and delivery times vary by location. "
    },
    // Add more FAQs
  ];

  return (
    <div className="toytreasure-container">
  {/* Top Banner */}

  
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className=" font-serif text-4xl mb-2">Toy Treasure</h1>
          <p className="text-gray-600">— SINCE 2014 —</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default FAQPage;