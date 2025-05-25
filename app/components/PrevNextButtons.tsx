'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { tutorSidebarLinks } from '../data/tutorSidebarLinks';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Gabungkan semua link dari data sidebar menjadi satu array
const allLinks = tutorSidebarLinks.flatMap(section => 
  [...(section.links || []), ...(section.installationLinks || [])]
);

export function PrevNextButtons() {
  const pathname = usePathname();

  // Cari index dari halaman saat ini di dalam array link
  const currentIndex = allLinks.findIndex(link => link.href === pathname);

  // Tentukan link sebelumnya dan berikutnya
  const prevLink = currentIndex > 0 ? allLinks[currentIndex - 1] : null;
  const nextLink = currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : null;

  const buttonClass = "flex items-center gap-4 w-1/2 p-4 border border-gray-200 dark:border-white/10 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors";
  const disabledButtonClass = "w-1/2 p-4 border border-gray-200/50 dark:border-white/5 rounded-lg opacity-50 cursor-not-allowed";

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex gap-4 w-full">
      {prevLink ? (
        <Link href={prevLink.href} className={`${buttonClass} justify-start`}>
          <FaArrowLeft />
          <div className="text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">Previous</p>
            <p className="font-bold text-gray-800 dark:text-white">{prevLink.text}</p>
          </div>
        </Link>
      ) : (
        <div className={disabledButtonClass}></div> // Placeholder agar layout tetap sama
      )}

      {nextLink ? (
        <Link href={nextLink.href} className={`${buttonClass} justify-end`}>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400">Next</p>
            <p className="font-bold text-gray-800 dark:text-white">{nextLink.text}</p>
          </div>
          <FaArrowRight />
        </Link>
      ) : (
        <div className={disabledButtonClass}></div> // Placeholder
      )}
    </div>
  );
}