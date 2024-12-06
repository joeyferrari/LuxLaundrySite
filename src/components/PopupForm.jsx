'use client';

import React, { useState, useEffect } from 'react';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      console.log('Popup should be visible now');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Submitting form...');
    
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email: formData.email,
          fields: {
            name: formData.name,
          },
          groups: ['135837766271370979'],
        }),
      });

      console.log('Response status:', response.status);

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setTimeout(() => setIsVisible(false), 2000);
      } else {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        setMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>
        
        <h2 className="font-mono text-2xl font-bold text-center mb-6">
          Wash Twice, Pay Once - Receive a Free Laundry Service on Your Second Basket with Every Purchase!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Generously gift your free basket to a family member, neighbor, or friend—share the love of clean laundry—or keep it for yourself!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F38BA3]"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F38BA3]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F38BA3] text-white py-2 px-4 rounded-md hover:bg-[#F38BA3]/90 transition duration-200 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Get My Free Basket'}
          </button>
        </form>
        
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopupForm; 