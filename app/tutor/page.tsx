// app/tutor/page.tsx

import Link from 'next/link';
import { tutorSidebarLinks } from '../data/tutorSidebarLinks'; // Pastikan path ini benar

export default function TutorHomePage() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <div className="pb-4 border-b border-gray-200 dark:border-white/20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">SYD Node</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Dokumentasi ini dibuat untuk para node airdrop hunter. Semoga kita semua bisa terus sama-sama belajar.
Semangat, salam JP 
        </p>
      </div>

      {/* <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Kategori Tutorial</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {tutorSidebarLinks.map((section) => (
            <div key={section.title} className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{section.title}</h3>
              <ul>
                {(section.links || section.installationLinks)?.map((link) => (
                  <li key={link.href} className="mb-1">
                    <Link href={link.href} className="text-primary hover:underline">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}
    </article>
  );
}