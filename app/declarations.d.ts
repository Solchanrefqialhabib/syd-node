// declarations.d.ts

// Deklarasi untuk file .json (jika sudah ada, biarkan)
declare module "*.json" {
  const value: any;
  export default value;
}

// --- TAMBAHKAN DEKLARASI INI UNTUK DOTLOTTIE-PLAYER ---
declare namespace JSX {
  interface IntrinsicElements {
    'dotlottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string;
      background?: string;
      speed?: string;
      loop?: boolean;
      autoplay?: boolean;
      // Tambahkan atribut lain yang mungkin Anda gunakan
    }, HTMLElement>;
  }
}