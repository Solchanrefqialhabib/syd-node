// --- PATH IMPOR SUDAH DIPERBAIKI SESUAI STRUKTUR ANDA ---
import { CodeBlock } from '../../components/CodeBlock'; // Naik dua level, lalu masuk ke components
import { OnThisPage } from '../../components/OnThisPage'; // Naik dua level, lalu masuk ke components
import { PrevNextButtons } from '../../../components/PrevNextButtons'; // <-- 1. TAMBAHKAN IMPOR INI

const headings = [
  { id: 'system-specs', text: 'System Specs', level: 2 },
  { id: 'prepare', text: 'Prepare Before Install Node', level: 2 },
  { id: 'install-ubuntu', text: 'Install Node di Ubuntu/Linux', level: 2 },
  { id: 'update-git', text: 'Update paket & install git', level: 3 },
  { id: 'install-docker', text: 'Install docker', level: 3 },
  { id: 'download-node-files', text: 'Download file node', level: 3 },
  { id: 'enter-node-folder', text: 'Masuk ke folder node', level: 3 },
  { id: 'run-node', text: 'Run Node', level: 3 },
  { id: 'check-container', text: 'Pastikan docker container berjalan', level: 3 },
  { id: 'generate-keys', text: 'Generate hardware and challenge key', level: 3 },
  { id: 'register-node', text: 'Register Node', level: 3 },
];

export default function InstallBeaconNodePage() {
  return (
    <div className="flex">
      <article className="w-full lg:w-[calc(100%-16rem)] prose dark:prose-invert max-w-none">
        {/* Judul Utama dan Info Update */}
        <div className="pb-4 border-b border-gray-200 dark:border-white/20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Install Beacon Node</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Last update: 22-05-2025</p>
        </div>

        {/* System Specs */}
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

        {/* Prepare Before Install Node */}
        <section id="prepare" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prepare Before Install Node</h2>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Register akun menggunakan email: <a href="https://app.blockcast.network?referral-code=Mi5UWv" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">app.blockcast.network?referral-code=Mi.UWv</a></li>
            <li>Buat Wallet baru di phantom atau di solflare</li>
            <li>Link your wallet di menu “Profile”</li>
            <li>Note: Wajib connect wallet di web, supaya bisa add node.</li>
          </ol>
        </section>

        {/* Install Node beacon blockcast di Ubuntu/Linux */}
        <section id="install-ubuntu" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Install Node beacon blockcast di Ubuntu/Linux</h2>
          
          <div id="update-git" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Update paket & install git</h3>
            <CodeBlock>apt update && apt install git -y</CodeBlock>
          </div>

          <div id="install-docker" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Install docker (jika belum install)</h3>
            <CodeBlock>{`sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update

apt-cache policy docker-ce

sudo apt install docker-ce -y

sudo systemctl restart docker

sudo systemctl status docker`}</CodeBlock>
          </div>

          <div id="download-node-files" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Download file node</h3>
            <CodeBlock>git clone https://github.com/Blockcast/beacon-docker-compose.git</CodeBlock>
          </div>
          
          <div id="enter-node-folder" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Masuk ke folder node</h3>
            <CodeBlock>cd beacon-docker-compose</CodeBlock>
          </div>

          <div id="run-node" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Run Node</h3>
            <CodeBlock>docker compose up -d</CodeBlock>
          </div>

          <div id="check-container" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Pastikan docker container sudah berjalan (control_proxy, beacond, blockcastd & beacon-docker-compose-watchtower-1)</h3>
            <CodeBlock>docker ps</CodeBlock>
          </div>

          <div id="generate-keys" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Generate hardware and challenge key (simpan, digunakan untuk register node)</h3>
            <CodeBlock>docker compose exec blockcastd blockcastd init</CodeBlock>
          </div>

          <div id="register-node" className="mt-4 scroll-mt-20">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Register Node</h3>
            <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Di web, klik “Get A Node”</li>
                <li>Masukkan Hardware ID, Challenge Key dan Node Name (yang sebelumnya sudah anda simpan)</li>
                <li>Untuk Location, ketik lokasi sesuai vps anda berada.</li>
                <li>Klik “Register Node”</li>
                <li>DONE (Check node anda di web, pastikan online)</li>
            </ol>
          </div>
        </section>
                {/* Komponen PrevNextButtons dipanggil di sini */}
        <PrevNextButtons />
      </article>
      
      <div className="flex-grow">
        <OnThisPage headings={headings} />
      </div>
    </div>
  );
}