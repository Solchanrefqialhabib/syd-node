import { CodeBlock } from '../components/CodeBlock';
import { OnThisPage } from '../components/OnThisPage';

// Data untuk daftar isi di kanan, sesuai dengan ID section di bawah
const headings = [
  { id: 'system-specs', text: 'System Specs', level: 2 },
  { id: 'prepare', text: 'Prepare Before Install', level: 2 },
  { id: 'install', text: 'Install Node on Ubuntu', level: 2 },
  { id: 'step1', text: '1. Update packages', level: 3 },
  { id: 'step2', text: '2. Install Docker', level: 3 },
];

export default function TutorPage({ params }: { params: { slug: string } }) {
  // Di aplikasi nyata, Anda akan mengambil konten berdasarkan params.slug
  // dari database atau file .mdx.

  return (
    <div className="flex">
      <article className="w-full lg:w-[calc(100%-16rem)] prose dark:prose-invert max-w-none">
        <div className="pb-4 border-b border-gray-200 dark:border-white/20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Install Beacon Node</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Last updated on 25-05-2025</p>
        </div>

        <section id="system-specs" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">System Specs</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-sm text-left border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-white/5">
                <tr>
                  <th className="p-2 border-r border-gray-300 dark:border-gray-700">Hardware</th>
                  <th className="p-2">Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">CPU</td><td className="p-2">2 Core</td></tr>
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">RAM</td><td className="p-2">2 GB</td></tr>
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">Disk</td><td className="p-2">10 GB</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="prepare" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prepare Before Install Node</h2>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Register dan mengonfirmasi email.</li>
            <li>Login your wallet di menu 'Profile'.</li>
            <li>Pilih 'Align wallet address' di web, supaya bisa add node.</li>
          </ol>
        </section>

        <section id="install" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Install Node di Ubuntu/Limux</h2>
          <div id="step1" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">1. Update paket</h3>
            <CodeBlock>apt-get update && apt-get install -y</CodeBlock>
          </div>
          <div id="step2" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">2. Install docker</h3>
            <CodeBlock>{`sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common -y`}</CodeBlock>
          </div>
        </section>
      </article>
      
      {/* Meletakkan Daftar Isi di sisi kanan */}
      <div className="flex-grow">
        <OnThisPage headings={headings} />
      </div>
    </div>
  );
}