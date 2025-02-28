import React from 'react';
import { motion } from 'framer-motion';
import './privacy.css';
const PrivacyPolicy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className=" text-Red text-4xl mb-2">Toy Treasure</h1>
          <p className="text-black-600">— SINCE 2019 —</p>
        </div>

        <motion.div 
          className="bg-white rounded-lg shadow-sm p-8"
          {...fadeIn}
        >
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-black-800 mb-4">
            Effective and Last Updated Date: November 17, 2023
          </p>
          <p className="text-black-600 mb-4">
            Originally Published: March 30, 2022
          </p>

          <div className="prose max-w-none">
            <p className="mb-6">
              Toy Treasure ("Toy Treasure," the "Company," "we," or "us") is committed to respecting 
              the privacy of the Personal Information we process. Please read this Privacy Policy 
              ("Privacy Policy") carefully to understand how we collect, use, and process Personal Information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">TABLE OF CONTENTS:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>SCOPE</li>
              <li>WHAT PERSONAL INFORMATION WE COLLECT AND HOW</li>
              <li>HOW WE USE PERSONAL INFORMATION</li>
              <li>HOW WE DISCLOSE PERSONAL INFORMATION</li>
              <li>MARKETING PREFERENCES</li>
              {/* Add more sections as needed */}
            </ol>

            {/* Add more content sections */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;