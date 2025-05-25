'use client';

import { motion } from 'framer-motion';

// Konfigurasi varian animasi
// 'hidden': keadaan awal sebelum elemen terlihat (opacity 0, sedikit bergeser ke bawah)
// 'visible': keadaan akhir setelah elemen terlihat (opacity 1, kembali ke posisi normal)
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Komponen AnimatedDiv menerima:
// - children: Elemen apa pun yang ingin kita animasikan
// - delay: Waktu tunda (dalam detik) sebelum animasi dimulai (opsional)
export function AnimatedDiv({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial="hidden" // Mulai dengan varian 'hidden'
      whileInView="visible" // Animasikan ke varian 'visible' saat elemen masuk ke layar
      viewport={{ once: true, amount: 0.5 }} // Konfigurasi: animasi hanya berjalan sekali, saat 50% elemen terlihat
      transition={{ duration: 0.5, delay }} // Durasi animasi 0.5 detik, dengan delay yang diberikan
      variants={variants} // Gunakan konfigurasi varian di atas
    >
      {children}
    </motion.div>
  );
}