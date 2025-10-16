// app/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-900">
            AYOOLUMI MELEHON
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-primary-600 transition-colors">
              Portfolio
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </Link>
            <Link href="/experience" className="text-gray-700 hover:text-primary-600 transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              About
            </Link>
            <Link href="/portfolio" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Portfolio
            </Link>
            <Link href="/services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Services
            </Link>
            <Link href="/experience" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Experience
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}