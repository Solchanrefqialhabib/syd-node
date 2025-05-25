'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Pastikan path ini benar sesuai struktur folder Anda (@/data/... jika data di root, atau path relatif)
import { tutorSidebarLinks, type Section, type LinkItem } from '../data/tutorSidebarLinks'; 
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export function Sidebar() {
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const toggleDropdown = (title: string) => {
    setOpenDropdowns(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const renderLink = (link: LinkItem, isSubLink = false) => (
    <li key={link.href} className={isSubLink ? "ml-4" : ""}>
      <Link
        href={link.href}
        className={`block text-sm py-1.5 px-3 rounded-md transition-colors ${
          pathname === link.href
            ? 'bg-primary/20 text-primary font-semibold'
            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
        }`}
      >
        {link.text}
      </Link>
    </li>
  );

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto p-4 pr-8 border-r border-gray-200 dark:border-white/10 hidden md:block">
      <nav>
        <ul>
          {tutorSidebarLinks.map((section: Section) => (
            <li key={section.title} className="mb-3">
              {/* --- PERUBAHAN DI SINI --- */}
              {/* Sekarang kita cek keberadaan 'installationLinks' */}
              {section.installationLinks && section.installationLinks.length > 0 ? (
                // Ini adalah Kategori Dropdown
                <div>
                  <button
                    onClick={() => toggleDropdown(section.title)}
                    className="flex items-center justify-between w-full py-1.5 px-3 rounded-md text-left text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider hover:bg-gray-200 dark:hover:bg-white/5 transition-colors"
                  >
                    {section.title}
                    {openDropdowns[section.title] ? <FaChevronDown className="h-3 w-3" /> : <FaChevronRight className="h-3 w-3" />}
                  </button>
                  {openDropdowns[section.title] && (
                    <ul className="mt-1 pl-2 border-l border-gray-300 dark:border-gray-700">
                      {/* --- DAN DI SINI --- */}
                      {/* Kita map dari 'section.installationLinks' */}
                      {section.installationLinks.map(link => renderLink(link, true))}
                    </ul>
                  )}
                </div>
              ) : (
                // Ini adalah Kategori Biasa dengan 'links' langsung
                <>
                  <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {section.title}
                  </h3>
                  {section.links && (
                    <ul>
                      {section.links.map(link => renderLink(link))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}