"use client"

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-green-600">
              EcoCodiots
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-green-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600"
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="text-gray-600 hover:text-green-600"
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="skeuo-button text-white px-6 py-2 rounded-full"
            >
              Contact Us
            </Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            <i className="bi bi-list text-2xl text-gray-600"></i>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4">
            <Link
              href="#features"
              className="text-gray-600 hover:text-green-600"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-green-600"
            >
              How It Works
            </Link>
            <Link
              href="#benefits"
              className="text-gray-600 hover:text-green-600"
            >
              Benefits
            </Link>
            <Link
              href="#contact"
              className="skeuo-button text-white px-6 py-2 rounded-full"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
