'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white border-b shadow-sm">
      <Link href="/" className="text-xl font-bold">
        Mehul Sharma
      </Link>
      <div className="flex gap-4">
        <Link
          href="/"
          className={pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className={pathname === '/projects' ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-500'}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
