// import type { Metadata } from "next";
// import { Poppins } from "next/font/google";
// import "./globals.css";
// // Impor ThemeProvider yang baru kita buat
// import { ThemeProvider } from "./theme-provider";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
// });

// export const metadata: Metadata = {
//   title: "SYD Node",
//   description: "Kumpulan tools absurd untuk developer SYD.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // Tambahkan suppressHydrationWarning untuk menghindari error
//     <html lang="en" suppressHydrationWarning>
//       {/* --- BAGIAN YANG DIPERBAIKI --- */}
//       <body className={`${poppins.className} bg-gray-100 dark:bg-dark-200`}>
//         {/* Bungkus children dengan ThemeProvider */}
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SYD Node",
  description: "Kumpulan tools absurd untuk developer SYD.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* --- TAMBAHKAN SCRIPT PLAYER DI SINI --- */}
        <script 
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
          type="module"
        ></script>
      </head>
      <body className={`${poppins.className} bg-gray-100 dark:bg-dark-200`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}