'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true); // Show the header when scrolling
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true); // Ensures client-side rendering is consistent
  }, []);

  const categories = [
    { name: 'Home', href: '/' },
    { name: 'Climate', href: '/category/climate' },
    { name: 'Technology', href: '/category/technology' },
    { name: 'Science', href: '/category/science' },
    { name: 'Register', href: '/register' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md transform transition-transform duration-300 ${
        showHeader ? 'translate-y-0' : 'translate-y-0'
      }`}
    >
      <header className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">BBC</span>
            </Link>

            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link href={category.href} className="hover:text-gray-300 transition-colors">
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {isMounted && (
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>

        {isMounted && isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block px-3 py-2 text-base hover:bg-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
