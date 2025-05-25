// Definisikan tipe untuk setiap item link
export type LinkItem = {
  text: string;        // Teks yang akan ditampilkan
  href: string;        // URL tujuan
  isPage?: boolean;     // Opsional: tandai jika ini adalah halaman konten utama
};

// Definisikan tipe untuk setiap bagian/kategori di sidebar
export type Section = {
  title: string;        // Judul kategori utama, misal "Getting Started", "Blockcast"
  // 'links' digunakan untuk item-item yang langsung berupa halaman,
  // atau untuk kategori yang tidak memiliki sub-dropdown "Instalasi"
  links?: LinkItem[];
  // 'installationLinks' digunakan KHUSUS untuk sub-link di bawah dropdown "Instalasi"
  // di dalam sebuah kategori.
  installationLinks?: LinkItem[];
};

export const tutorSidebarLinks: Section[] = [
  {
    title: 'Getting Started',
    links: [
      // --- TAMBAHKAN BARIS INI ---
      { text: 'Read Me First', href: '/tutor', isPage: true }, // Mengarah ke halaman utama tutorial
      // { text: 'Introduction', href: '/tutor/introduction', isPage: true },
      // { text: 'System Requirements', href: '/tutor/system-requirements', isPage: true },
    ],
  },
  {
    title: 'Blockcast',
    // 'installationLinks' akan membuat "Blockcast" menjadi dropdown
    // dengan sub-item "Instalasi" yang berisi link-link ini.
    installationLinks: [
      { text: 'Install Beacon Node', href: '/tutor/blockcast/install-beacon-node', isPage: true },
      // Tambahkan link instalasi Blockcast lainnya di sini jika ada
      // Contoh: { text: 'Update Beacon Node', href: '/tutor/blockcast/update-beacon-node', isPage: true },
    ],
    // Jika "Blockcast" juga memiliki halaman info umum selain instalasi,
    // Anda bisa tambahkan array 'links' di sini seperti pada "Getting Started".
    // Contoh:
    // links: [
    //   { text: 'About Blockcast', href: '/tutor/blockcast/about', isPage: true },
    // ]
  },
  {
    title: 'Aztec',
    installationLinks: [
      { text: 'Install Aztec Node', href: '/tutor/aztec/install-aztec-node', isPage: true },
      // Tambahkan link instalasi Aztec lainnya di sini
    ],
  },
];