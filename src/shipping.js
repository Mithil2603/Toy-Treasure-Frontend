import React, { useState, useEffect } from 'react';
import { Button, Card, CardContent, Alert } from '@mui/material';
import AlertDescription from './AlertDescription.js';
import './Shipping.css';

export default function Shipping () {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const standardRates = [
    { range: 'Rs.2500 and under', fee: 'Rs.9.99' },
    { range: 'Rs.2500-Rs.5000', fee: 'Rs.10.99' },
    { range: 'Rs.5000-Rs.7500', fee: 'Rs.12.99' },
    { range: 'Rs.7500-Rs.10000', fee: 'Rs.14.99' },
    { range: 'Qualifying orders over Rs.15000', fee: 'Free!' },
  ];

  const expressRates = [
    { range: 'Orders under RS.75', fee: 'Rs.25' },
    { range: 'Orders Rs.76-$200', fee: 'Rs.35' },
    { range: 'Orders Rs.201-$500', fee: 'Rs.40' },
    { range: 'Orders Rs.501-$750', fee: 'Rs.50' },
    { range: 'Orders Rs.751-$999', fee: 'Rs.75' },
    { range: 'Orders Rs.1000+', fee: 'Rs.100' },
  ];

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
    setShowMessage(true);
    localStorage.setItem('cookiesAccepted', 'true');
    setTimeout(() => setShowMessage(false), 3000);
  };

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    if (accepted) setCookiesAccepted(true);
  }, []);

  return (
    <div className="shipping-form">
      <Card className="shipping-card">
        <CardContent className="shipping-content">
          <h1 className="shipping-title">Shipping Information</h1>
          
          <div className="shipping-card1">
            <h2 className="text-xl font-semibold mb-4">Standard Shipping (3-10 Business Days)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border">Order Total</th>
                    <th className="p-4 text-left border">Shipping Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {standardRates.map((rate, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 border">{rate.range}</td>
                      <td className="p-4 border">{rate.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Express Shipping</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left border">Order Total</th>
                    <th className="p-4 text-left border">Express Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {expressRates.map((rate, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-4 border">{rate.range}</td>
                      <td className="p-4 border">{rate.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {!cookiesAccepted && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <p className="text-gray-700">This website uses cookies to enhance user experience...</p>
            <Button onClick={handleAcceptCookies} className="bg-red-600 text-white hover:bg-red-700">
              Accept Cookies
            </Button>
          </div>
        </div>
      )}

      {showMessage && (
        <Alert className="fixed bottom-4 right-4 bg-green-50 border-green-200">
          <AlertDescription>
            Cookies accepted! Thank you for your preference.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
