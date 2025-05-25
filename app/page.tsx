// app/page.tsx
'use client';

import { FaDiscord, FaGlobe, FaBook, FaCode } from "react-icons/fa";
import Link from "next/link"; // Tetap impor Link untuk link internal
// Pastikan path ini benar
import { AnimatedDiv } from "./components/AnimatedDiv"; 
import { ThemeSwitcher } from "./components/ThemeSwitcher";

type CardLink = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean; // Pastikan properti ini ada
};

const cardLinks: CardLink[] = [
  {
    icon: <FaDiscord className="h-8 w-8 text-primary" />,
    title: "Join Discord", // Nama sudah benar
    description: "Komunitas para developer SYD.",
    link: "https://maouam.nodelab.my.id/", // Ganti dengan URL undangan Discord Anda
    isExternal: true, // Tandai sebagai link eksternal
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-primary" />,
    title: "My Website",
    description: "Lihat portofolio lengkapku di sini.",
    link: "#", // Ganti jika ada URL
    isExternal: true, // Jika ini link eksternal
  },
  {
    icon: <FaBook className="h-8 w-8 text-primary" />,
    title: "Tutor All Node",
    description: "Panduan lengkap seputar node.",
    link: "/tutor", 
    isExternal: false, // Link internal
  },
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Build this web",
    description: "Source code website ini.",
    link: "#", // Ganti jika ada URL
    isExternal: true, // Jika ini link eksternal
  },
];

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-gray-100 dark:bg-dark-200">
      {/* ... Navbar Anda ... */}

      <main className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16">
        {/* ... Hero Section Anda ... */}

        <section id="tools" className="py-16 md:py-20">
          <AnimatedDiv>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Welcome!
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cardLinks.map((item, index) => (
              <AnimatedDiv key={index} delay={0.1 * index}>
                {/* --- INI BAGIAN PENTING YANG PERLU DIPERBAIKI --- */}
                {item.isExternal ? (
                  <a
                    href={item.link}
                    target="_blank" // Buka di tab baru
                    rel="noopener noreferrer" // Keamanan untuk link eksternal
                    className="shining-card group block p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:backdrop-blur-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 text-gray-700 dark:text-primary group-hover:text-accentGlow transition-colors duration-300 transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    className="shining-card group block p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:backdrop-blur-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 text-gray-700 dark:text-primary group-hover:text-accentGlow transition-colors duration-300 transform group-hover:scale-110">
                        {item.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                    </div>
                  </Link>
                )}
              </AnimatedDiv>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}