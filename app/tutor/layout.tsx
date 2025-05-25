// app/tutor/layout.tsx

import Link from 'next/link';
import { Sidebar } from '../components/Sidebar'; // Pastikan Sidebar.tsx ada di root components/
import { ThemeSwitcher } from '../components/ThemeSwitcher'; // Pastikan ThemeSwitcher.tsx ada di root components/

export default function TutorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full">
      {/* Navbar Atas Khusus untuk Halaman Tutorial */}
      <nav className="sticky top-0 z-30 w-full h-16 bg-white/80 dark:bg-dark-200/80 backdrop-blur-sm border-b border-gray-200 dark:border-white/10">
          <div className="container mx-auto h-full flex items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">SYD Node</Link>
              <ThemeSwitcher />
          </div>
      </nav>
      {/* Kontainer untuk Sidebar dan Konten Utama */}
      <div className="container mx-auto flex">
        <Sidebar />
        <main className="flex-grow min-w-0 px-4 sm:px-8 py-6">
          {children} {/* Ini akan menjadi isi dari app/tutor/[slug]/page.tsx */}
        </main>
      </div>
    </div>
  );
}