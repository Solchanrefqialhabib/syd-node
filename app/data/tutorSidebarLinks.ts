// data/tutorSidebarLinks.ts

// --- CUKUP SATU SET DEFINISI TIPE INI ---
export type LinkItem = {
  text: string;        // Teks yang akan ditampilkan
  href: string;        // URL tujuan
  isPage?: boolean;     // Opsional: tandai jika ini adalah halaman konten utama
};

export type Section = {
  title: string;        // Judul kategori utama, misal "Getting Started", "Blockcast"
  links?: LinkItem[];   // Untuk link langsung di bawah kategori
  installationLinks?: LinkItem[]; // Untuk sub-link di bawah dropdown "Instalasi"
};

// --- DATA ANDA DIMULAI DARI SINI ---
export const tutorSidebarLinks: Section[] = [
  {
    title: 'Getting Started',
    links: [
      { text: 'Read Me First', href: '/tutor', isPage: true },
      // { text: 'Introduction', href: '/tutor/introduction', isPage: true }, // Anda mengomentari ini
      // { text: 'System Requirements', href: '/tutor/system-requirements', isPage: true }, // Anda mengomentari ini
    ],
  },
  {
    title: 'Blockcast',
    installationLinks: [
      { text: 'Install Beacon Node', href: '/tutor/blockcast/install-beacon-node', isPage: true },
    ],
  },
 {
    title: 'Aztec',
    installationLinks: [
      // Link yang sudah ada
      // { text: 'Install Aztec Node', href: '/tutor/aztec/install-aztec-node', isPage: true },
      // --- TAMBAHKAN LINK BARU DI SINI ---
      { text: 'Install Sequencer Node', href: '/tutor/aztec/install-sequencer-node', isPage: true },
    ],
  },
];