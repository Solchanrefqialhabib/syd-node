/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Gunakan remotePatterns jika Next.js Anda >= 13 (sangat disarankan)
    remotePatterns: [
      {
        protocol: 'http', // Atau 'https' jika gambar Anda dihosting di HTTPS
        hostname: 'googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Jika Anda menggunakan versi Next.js yang lebih lama dan/atau ingin tetap pakai `domains`:
    // domains: ['googleusercontent.com'],
  },
  // Anda bisa tambahkan konfigurasi lain di sini jika diperlukan,
  // misalnya basePath, output, dll.
};

module.exports = nextConfig;