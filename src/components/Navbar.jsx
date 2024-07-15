import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">
            <img
              src="https://ik.imagekit.io/laxmifinance/IMG-20240603-WA0018.jpg?updatedAt=1720653923997"
              alt="Jr Groups"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link to="/Gallary" className="text-white hover:text-gray-300">
            Gallary
          </Link>

          <Link
            to="https://ad-finance.netlify.app/"
            className="text-white hover:text-gray-300"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Menu>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`block px-4 py-2 text-white ${active ? "bg-blue-700" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/about"
                  className={`block px-4 py-2 text-white ${active ? "bg-blue-700" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/contact"
                  className={`block px-4 py-2 text-white ${active ? "bg-blue-700" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/Gallary"
                  className={`block px-4 py-2 text-white ${active ? "bg-blue-700" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Gallary
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="https://ad-finance.netlify.app/"
                  className={`block px-4 py-2 text-white ${active ? "bg-blue-700" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </Menu.Item>
          </Menu>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
