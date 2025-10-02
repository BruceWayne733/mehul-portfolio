'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <nav className="w-full flex items-center justify-between p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700/50 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
        Mehul Sharma
      </Link>
      <div className="flex gap-6 items-center">
        <Link
          href="/"
          className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${pathname === '/'
            ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
            : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={`px-3 py-2 rounded-md font-medium transition-all duration-300 ${pathname === '/projects'
            ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
            : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
