import React from 'react';
import Footer from '../pages/footer';


function Contact() {
  return (
<>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
    <Footer/>
</>

  );
}

export default Contact;
