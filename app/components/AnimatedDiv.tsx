// components/AnimatedDiv.tsx
'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- TAMBAHKAN 'className' SEBAGAI PROP OPSIONAL ---
export function AnimatedDiv({ 
  children, 
  delay = 0, 
  className // Tambahkan prop className di sini
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string; // Definisikan tipenya sebagai string opsional
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      variants={variants}
      className={className} // --- TERUSKAN className KE motion.div ---
    >
      {children}
    </motion.div>
  );
}