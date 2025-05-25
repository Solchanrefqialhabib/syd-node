import { FaDiscord, FaGlobe, FaBook, FaCode } from "react-icons/fa";
import Link from "next/link";
import { AnimatedDiv } from "./components/AnimatedDiv";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

// --- BAGIAN YANG DIPERBAIKI (1) ---
// Kita definisikan "bentuk" atau tipe dari setiap objek link.
// React.ReactNode adalah tipe yang tepat untuk menampung komponen React seperti ikon.
type CardLink = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
};

// --- BAGIAN YANG DIPERBAIKI (2) ---
// Kita terapkan tipe CardLink[] (sebuah array dari CardLink) ke variabel cardLinks.
const cardLinks: CardLink[] = [
  {
    icon: <FaDiscord className="h-8 w-8 text-primary" />,
    title: "Join My Discord",
    description: "Komunitas para developer SYD.",
    link: "#",
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-primary" />,
    title: "My Website",
    description: "Lihat portofolio lengkapku di sini.",
    link: "#",
  },
  {
    icon: <FaBook className="h-8 w-8 text-primary" />,
    title: "Tutor All Node",
    description: "Panduan lengkap seputar node.",
    link: "/tutor/introduction",
  },
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Build this web",
    description: "Source code website ini.",
    link: "#",
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

      <main className="container mx-auto px-6 pt-32">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <div className="flex flex-col gap-4 text-center md:text-left z-10">
            <AnimatedDiv>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-primary dark:animate-breathingGlow">
                SYD Node
              </h1>
            </AnimatedDiv>
<AnimatedDiv delay={0.2}>
  <div className="inline-block"> {/* Pastikan ada div pembungkus ini */}
    <p className="font-mono text-lg md:text-xl text-gray-600 dark:text-gray-300 overflow-hidden border-r-4 border-r-accentGlow whitespace-nowrap mx-auto md:mx-0 animate-typing">
      Keep learning by siting!
    </p>
  </div>
</AnimatedDiv>
            <AnimatedDiv delay={0.4}>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Platform untuk para antusias teknologi, node runner, dan developer yang suka bereksperimen.
              </p>
            </AnimatedDiv>
            <AnimatedDiv delay={0.6}>
              <div className="mt-6">
                <a
                  href="#tools"
                  className="animated-button inline-block px-8 py-3 bg-gradient-to-r from-primary to-accentGlow text-white dark:text-dark-200 font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Explore Tools
                </a>
              </div>
            </AnimatedDiv>
          </div>

          <AnimatedDiv delay={0.3}>
            <div className="flex items-center justify-center p-8">
              <div className="w-full h-80 bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl dark:backdrop-blur-lg flex items-center justify-center">
                <p className="text-gray-400 dark:text-gray-500 font-mono">
                  [ Visual Animasi Futuristik ]
                </p>
              </div>
            </div>
          </AnimatedDiv>
        </section>

        <section id="tools" className="py-20">
          <AnimatedDiv>
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Welcome!
            </h2>
          </AnimatedDiv>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">{item.description}</p>
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