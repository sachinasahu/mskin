"use client";

import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center overflow-hidden">
             <img src="/clinic-logo.jpeg" alt="business logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-bold text-teal-600">
              Dr Manoj&apos;s Skin Clinic
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-end space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/appointments"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Appointments
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Call Now Button */}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/appointments"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Appointments
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-700 hover:bg-teal-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
