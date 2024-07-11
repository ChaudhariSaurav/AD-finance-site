import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Branch Address</h2>
            <p className="mt-2">Dalsinghsarai, Bihar</p>
            <p>Phone: +123 456 7890</p>
            <p>Email: info@adfinance.com</p>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold">Follow Us</h2>
            <div className="flex mt-2">
              <Link to="#" className="mr-4 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </Link>
              <Link to="#" className="mr-4 hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </Link>
              <Link to="#" className="hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8l7-4 7 4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 AD Finance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
