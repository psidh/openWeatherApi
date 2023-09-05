"use client";
import React from 'react';

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 text-justify">
      <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-gray-800 mb-4">
        Contact Us
      </h1>
      <p className="text-xl dark:text-gray-300 text-gray-700 mb-6">
        Have questions or feedback? Feel free to get in touch with us.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>

      {/* Contact Information */}
      <div>
        <h2 className="text-2xl font-semibold dark:text-teal-400 text-teal-600 mb-4">Contact Information</h2>
        <p className="text-lg dark:text-gray-300 text-gray-700 mb-2">
          Email: contact@example.com
        </p>
        <p className="text-lg dark:text-gray-300 text-gray-700 mb-2">
          Phone: +1 (123) 456-7890
        </p>
        <p className="text-lg dark:text-gray-300 text-gray-700">
          Address: 123 Main Street, City, Country
        </p>
      </div>
    </div>
  );
};

export default Contact;
