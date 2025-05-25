// app/tutor/layout.tsx
'use client';

import Link from 'next/link';
import { Sidebar } from '../components/Sidebar';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { useState, useEffect } from 'react'; // Import useEffect
import { FaBars, FaTimes } from 'react-icons/fa';

export default function TutorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menyediakan fungsi toggleMobileMenu secara global sementara untuk Sidebar mobile
  // Ini bukan cara terbaik, idealnya menggunakan Context atau Zustand untuk state management
  useEffect(() => {
    (window as any).toggleMobileMenu = toggleMobileMenu;
    return () => {
      delete (window as any).toggleMobileMenu;
    };
  }, [isMobileMenuOpen]);


  return (
    <div className="w-full">
      <nav className="sticky top-0 z-40 w-full h-16 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
          <div className="container mx-auto h-full flex items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                SYD Node
              </Link>

              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="hidden sm:flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  aria-label="Kembali ke Halaman Utama"
                >
                  {/* <FaHome className="h-4 w-4" /> */}
                  {/* <span>Home</span> */}
                </Link>
                <ThemeSwitcher />
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden"
                  aria-label="Toggle navigation menu"
                >
                  {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                </button>
              </div>
          </div>
      </nav>

      <div className="container mx-auto flex">
        <Sidebar /> {/* Ini untuk Desktop, isMobile defaultnya false */}

        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
          >
            <div
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-dark-200 shadow-xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-white/10">
                <button onClick={toggleMobileMenu} className="p-2">
                    <FaTimes className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-4">
                 <Sidebar isMobile={true} /> {/* Beri prop isMobile */}
              </div>
            </div>
          </div>
        )}

        <main className="flex-grow min-w-0 px-4 sm:px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}