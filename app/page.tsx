// app/page.tsx
'use client';

import { FaDiscord, FaGlobe, FaBook, FaCode } from "react-icons/fa";
import Link from "next/link"; // Tetap impor Link untuk link internal
// Pastikan path ini benar sesuai struktur folder Anda.
// Jika components ada di root: import { AnimatedDiv } from "@/components/AnimatedDiv";
import { AnimatedDiv } from "./components/AnimatedDiv"; 
import { ThemeSwitcher } from "./components/ThemeSwitcher"; // Sama, pastikan pathnya

type CardLink = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean; 
};

const cardLinks: CardLink[] = [
  {
    icon: <FaDiscord className="h-8 w-8 text-primary" />,
    title: "Join Discord",
    description: "Komunitas para developer SYD.",
    link: "https://discord.gg/UNDANGAN_SERVER_DISCORD_ANDA", // GANTI DENGAN URL DISCORD ANDA
    isExternal: true, 
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-primary" />,
    title: "My Website",
    description: "Lihat portofolio lengkapku di sini.",
    link: "#", 
    isExternal: true, 
  },
  {
    icon: <FaBook className="h-8 w-8 text-primary" />,
    title: "Tutor All Node",
    description: "Panduan lengkap seputar node.",
    link: "/tutor", 
    isExternal: false,
  },
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Build this web",
    description: "Source code website ini.",
    link: "#", 
    isExternal: true, 
  },
];

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden bg-gray-100 dark:bg-dark-200">
      <nav className="absolute top-0 left-0 w-full p-4 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">SYD Node</h2>
          <ThemeSwitcher />
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16"> {/* Sedikit penyesuaian padding horizontal */}
        <section className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Kolom Teks: order-2 di mobile agar di bawah animasi, order-1 di md ke atas */}
          <div className="flex flex-col gap-4 text-center md:text-left z-10 order-2 md:order-1">
            <AnimatedDiv>
              {/* Ukuran font responsif */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-primary dark:animate-breathingGlow">
                SYD Node
              </h1>
            </AnimatedDiv>
            <AnimatedDiv delay={0.2}>
              <div className="inline-block">
                {/* Ukuran font responsif */}
                <p className="font-mono text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 overflow-hidden border-r-4 border-r-accentGlow whitespace-nowrap mx-auto md:mx-0 animate-typing">
                  Keep learning by siting!
                </p>
              </div>
            </AnimatedDiv>
            <AnimatedDiv delay={0.4}>
              {/* Ukuran font responsif */}
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
                Platform untuk para antusias teknologi, node runner, dan developer yang suka bereksperimen.
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.6}>
              <div className="mt-6">
                {/* Ukuran tombol responsif */}
                <a
                  href="#tools"
                  className="animated-button inline-block px-6 py-3 sm:px-8 text-sm sm:text-base bg-gradient-to-r from-primary to-accentGlow text-white dark:text-dark-200 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Explore Tools
                </a>
              </div>
            </AnimatedDiv>
          </div>

          {/* Kolom Animasi: order-1 di mobile agar di atas teks, order-2 di md ke atas */}
          <AnimatedDiv delay={0.3} className="w-full order-1 md:order-2">
            <div className="flex items-center justify-center p-4 h-full">
              {/* Ukuran kontainer animasi responsif */}
              <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
                <dotlottie-player
                  src="https://lottie.host/bda12c3d-37ae-49c8-864e-047a0df724eb/KR9qZztbfE.lottie"
                  background="transparent"
                  speed="1"
                  // Perbaiki style, width: '100%' akan mengikuti parent, height: 'auto' menjaga rasio aspek
                  style={{ width: '100%', height: 'auto', margin: 'auto' }}
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
          </AnimatedDiv>
        </section>

        <section id="tools" className="py-16 md:py-20">
          <AnimatedDiv>
            {/* Ukuran font responsif */}
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Welcome!
            </h2>
          </AnimatedDiv>
          {/* Grid responsif untuk kartu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cardLinks.map((item, index) => (
              <AnimatedDiv key={index} delay={0.1 * index}>
                <Link
                  href={item.link}
                  className="shining-card group block p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-lg dark:backdrop-blur-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative z-10">
                    <div className="mb-4 text-gray-700 dark:text-primary group-hover:text-accentGlow transition-colors duration-300 transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    {/* Ukuran font responsif */}
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    {/* Ukuran font responsif */}
                    <p className="mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}