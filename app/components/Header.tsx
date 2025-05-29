'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-black via-neutral-900 to-black text-[color:var(--color-foreground)] shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-yellow-500 tracking-tight">
          FlexPulse
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex gap-8 items-center font-medium text-sm text-neutral-300"
        >
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/classes" className="hover:text-yellow-500 transition">
            Classes
          </Link>
          <Link href="/trainers" className="hover:text-yellow-500 transition">
            Trainers
          </Link>
          <Link href="/gallery" className="hover:text-yellow-500 transition">
            gallery
          </Link>
          <Link href="/membership" className="hover:text-yellow-500 transition">
            membership
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            About US
          </Link>
          <Link
            href="/membership"
            className="bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Join Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
  className="md:hidden flex items-center justify-center p-2 rounded border border-yellow-500 text-yellow-500 hover:bg-yellow-100 transition shadow-md"
  onClick={toggleMenu}
  aria-label="Toggle menu"
  aria-expanded={menuOpen}
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    {menuOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
</button>

      </div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav
          className="md:hidden px-6 pb-4 space-y-3 text-neutral-300"
          tabIndex={-1}
          aria-label="Mobile navigation"
        >
          <Link href="/" className="block hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/classes" className="block hover:text-yellow-500 transition">
            Classes
          </Link>
          <Link href="/trainers" className="block hover:text-yellow-500 transition">
            Trainers
          </Link>
          <Link href="/contact" className="block hover:text-yellow-500 transition">
            Contact
          </Link>
          <Link
            href="/membership"
            className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            Join Now
          </Link>
        </nav>
      )}
    </header>
  );
}
