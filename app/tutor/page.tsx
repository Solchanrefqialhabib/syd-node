// app/tutor/page.tsx

import Link from 'next/link';
// Pastikan path ini benar sesuai struktur folder Anda.
// Jika folder 'data' ada di root, gunakan '@/data/tutorSidebarLinks'
import { tutorSidebarLinks, type Section, type LinkItem } from '../data/tutorSidebarLinks'; 

export default function TutorHomePage() {
  return (
    // Tambahkan padding vertikal dan horizontal yang responsif
    <article className="w-full py-6 md:py-8 px-2 sm:px-0 prose dark:prose-invert max-w-none">
      <div className="pb-4 mb-8 md:mb-12 border-b border-gray-200 dark:border-white/20">
        {/* Ukuran font H1 dibuat responsif */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">SYD Node</h1>
        {/* Ukuran font paragraf dibuat responsif */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
          Dokumentasi ini dibuat untuk para node airdrop hunter. Semoga kita semua bisa terus sama-sama belajar.
          Semangat, salam JP 
        </p>
      </div>
    </article>
  );
}