"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-zinc-200 dark:bg-zinc-950/90 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
            MS Clinic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/appointments"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              Appointments
            </Link>
            <Link
              href="/about"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-emerald-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-zinc-700 dark:text-zinc-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/appointments"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Appointments
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-zinc-700 hover:bg-emerald-50 dark:text-zinc-300 dark:hover:bg-zinc-800 rounded-md"
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
