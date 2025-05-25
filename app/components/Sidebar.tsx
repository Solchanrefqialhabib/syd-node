'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// --- INI PERBAIKAN FINAL ---
// ../../ artinya: "naik 2 folder", lalu masuk ke folder 'data'
import { tutorSidebarLinks } from '../data/tutorSidebarLinks';

// Mendefinisikan tipe data untuk keamanan kode
type LinkItem = {
  text: string;
  href: string;
};

type Section = {
  title: string;
  links: LinkItem[];
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto p-4 pr-8 border-r border-gray-200 dark:border-white/10 hidden md:block">
      <nav>
        <ul>
          {tutorSidebarLinks.map((section: Section) => (
            <li key={section.title} className="mb-6">
              <h3 className="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link: LinkItem) => (
                  <li key={link.href}>
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
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}