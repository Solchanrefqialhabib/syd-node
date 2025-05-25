import { CodeBlock } from '../../components/CodeBlock';
import { OnThisPage } from '../../components/OnThisPage';
import { PrevNextButtons } from '../../../components/PrevNextButtons';

const headings = [
  { id: 'system-specs', text: 'System Specs', level: 2 },
  { id: 'prepare', text: 'Prepare Before Install Node', level: 2 },
  { id: 'install-node', text: 'Install Sequencer Node di Linux', level: 2 },
  { id: 'update-packages', text: 'Update & upgrade paket', level: 3 },
  { id: 'install-dependencies', text: 'Install depedensi', level: 3 },
  { id: 'install-docker', text: 'Install docker & docker compose', level: 3 },
  { id: 'install-aztec-tools', text: 'Install Aztec Tools', level: 3 },
  { id: 'restart-vps', text: 'Restart vps', level: 3 },
  { id: 'check-installation', text: 'Cek jika sudah terinstall', level: 3 },
  { id: 'update-aztec', text: 'Update Aztec', level: 3 },
  { id: 'run-node', text: 'Jalankan node', level: 3 },
  { id: 'claim-role', text: 'Claim Role Discord', level: 2 },
  { id: 'register-validator', text: 'Register Validator', level: 2 },
  { id: 'check-validator', text: 'Cek Validator Anda', level: 2 },
];

export default function InstallSequencerNodePage() {
  return (
    <div className="flex">
      <article className="w-full lg:w-[calc(100%-16rem)] prose dark:prose-invert max-w-none">
        <div className="pb-4 border-b border-gray-200 dark:border-white/20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Install Sequencer Node</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Last update: 05-05-2025
          </p>
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
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">CPU</td><td className="p-2">8 Cores</td></tr>
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">RAM</td><td className="p-2">16 GB</td></tr>
                <tr><td className="p-2 border-r border-gray-300 dark:border-gray-700">Disk</td><td className="p-2">1 TB</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="prepare" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prepare Before Install Node</h2>
          <ol className="list-decimal list-inside mt-4 space-y-2 text-gray-600 dark:text-gray-300">
            <li>Buat Wallet baru EVM, simpan private key dan addressnya.</li>
            <li>Isi Faucet ETH Sepolia.</li>
            <li>
              Dapatkan RPC & Beacon RPC:
              <ul className="list-disc list-inside ml-4 mt-1">
                <li><a href="https://dashboard.alchemy.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://dashboard.alchemy.com/</a> (free-RPC)</li>
                <li><a href="https://drpc.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://drpc.org</a> (free-Beacon RPC)</li>
                <li><a href="https://chainstack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://chainstack.com</a> (free-Beacon RPC)</li>
                <li><a href="https://www.ankr.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ankr.com</a> (berbayar-Beacon RPC)</li>
              </ul>
            </li>
            <li className="mt-2">Simpan ip public vps anda (paste perintah di bawah ini jika tidak tau public ip vps Anda):
                <CodeBlock>curl ifconfig.me</CodeBlock>
            </li>
          </ol>
        </section>

        <section id="install-node" className="mt-8 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Install Sequencer Node di Linux</h2>
            <div id="update-packages" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Update & upgrade paket</h3>
                <CodeBlock>apt update && apt upgrade -y</CodeBlock>
            </div>
            <div id="install-dependencies" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Install depedensi</h3>
                <CodeBlock>apt install curl iptables build-essential git wget lz4 jq make gcc nano automake autoconf tmux htop nvme-cli libgbm1 pkg-config libssl-dev libleveldb-dev tar clang bsdmainutils ncdu unzip libleveldb-dev  -y</CodeBlock>
            </div>
            <div id="install-docker" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Install docker & docker compose (jika belum install)</h3>
                <CodeBlock>{`sudo apt install apt-transport-https ca-certificates curl software-properties-common -y\n\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\nsudo apt update\n\napt-cache policy docker-ce\n\nsudo apt install docker-ce -y\n\nsudo systemctl restart docker\n\nsudo systemctl status docker`}</CodeBlock>
            </div>
            <div id="install-aztec-tools" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Install Aztec Tools</h3>
                <CodeBlock>{`aztec start --node --archiver --sequencer \\
  --network alpha-testnet \\
  --l1-rpc-urls RPC_URL_ANDA \\
  --l1-consensus-host-urls BEACON_URL_ANDA \\
  --sequencer.validatorPrivateKey 0xYourPrivateKey \\
  --sequencer.coinbase 0xYourAddress \\
  --p2p.p2pIp IP_PUBLIC_ANDA \\
  --p2p.maxTxPoolSize 1000000000`}</CodeBlock>
            </div>
            <div id="restart-vps" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Restart vps (jika sudah hidup remote kembali vps anda)</h3>
                <CodeBlock>reboot now</CodeBlock>
            </div>
            <div id="check-installation" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Cek jika sudah terinstall</h3>
                <CodeBlock>aztec</CodeBlock>
            </div>
            <div id="update-aztec" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Update Aztec</h3>
                <CodeBlock>aztec-up alpha-testnet</CodeBlock>
            </div>
            <div id="run-node" className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Jalankan node (ubah yg diperlukan)</h3>
                <CodeBlock>screen -S aztec</CodeBlock>
                {/* --- PERBAIKAN SPASI DI SINI --- */}
                <CodeBlock>{`aztec start --node --archiver --sequencer \\
  --network alpha-testnet \\
  --l1-rpc-urls RPC_URL_ANDA \\
  --l1-consensus-host-urls BEACON_URL_ANDA \\
  --sequencer.validatorPrivateKey 0xYourPrivateKey \\
  --sequencer.coinbase 0xYourAddress \\
  --p2p.p2pIp IP_PUBLIC_ANDA \\
  --p2p.maxTxPoolSize 1000000000`}</CodeBlock>
                <p className="mt-2 text-sm italic">Keluar dari screen: Ctrl + A + D</p>
                <p className="mt-1 text-sm italic">Note: Setelah memasukkan perintah, node Anda mulai berjalan, Butuh beberapa menit agar node Anda tersinkronisasi (-+ 10 menit)</p>
            </div>
        </section>

        <section id="claim-role" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Claim Role Discord</h2>
            <div className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Dapatkan nomor blok terbaru (simpan, contoh hasil: 20905)</h3>
                <CodeBlock>{`curl -s -X POST -H 'Content-Type: application/json' \\
-d '{"jsonrpc":"2.0","method":"node_getL2Tips","params":[],"id":67}' \\
http://localhost:8080 | jq -r ".result.proven.number"`}</CodeBlock>
            </div>
            <div className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Hasilkan bukti sinkronisasi Anda (Ganti 2x BLOCK_NUMBER dengan nomor Anda)</h3>
                <CodeBlock>{`curl -s -X POST -H 'Content-Type: application/json' \\
-d '{"jsonrpc":"2.0","method":"node_getArchiveSiblingPath","params":["BLOCK_NUMBER","BLOCK_NUMBER"],"id":67}' \\
http://localhost:8080 | jq -r ".result"`}</CodeBlock>
            </div>
             <div className="mt-4 scroll-mt-20">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Daftar dengan Discord</h3>
                 <ol className="list-decimal list-inside mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                    <li>Ketik perintah berikut di server Discord ini: <code className="bg-gray-200 dark:bg-gray-700 p-1 rounded-md text-sm">/operator start</code></li>
                    <li>Setelah mengetik perintah, Discord akan menampilkan kolom opsi yang terlihat seperti ini:
                        <ul className="list-disc list-inside ml-4 mt-1">
                            <li><code className="text-sm">address:</code> Alamat validator Anda (Alamat Ethereum)</li>
                            <li><code className="text-sm">block-number:</code> Nomor blok untuk verifikasi (Nomor blok dari Langkah 1)</li>
                            <li><code className="text-sm">proof:</code> Bukti sinkronisasi Anda (string base64 dari Langkah 2)</li>
                        </ul>
                    </li>
                    <li>Kemudian Anda akan mendapatkan Role Apprentice</li>
                </ol>
            </div>
        </section>

        <section id="register-validator" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Register Validator (Ganti RPC_URL, your-validator-address & 2x your-validator-address)</h2>
            <CodeBlock>{`aztec add-l1-validator \\
  --l1-rpc-urls RPC_URL \\
  --private-key your-private-key \\
  --attester your-validator-address \\
  --proposer-eoa your-validator-address \\
  --staking-asset-handler 0xF739D03e98e23A7B65940848aBA8921fF3bAc4b2 \\
  --l1-chain-id 11155111`}</CodeBlock>
           <p className="mt-2 text-sm italic">Perlu diketahui bahwa ada kuota harian 10 registrasi validator per hari, jika terjadi kesalahan, coba lagi besok.</p>
        </section>

        <section id="check-validator" className="mt-8 scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cek Validator Anda</h2>
          <p className="mt-2"><a href="https://aztecscan.xyz/validators" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://aztecscan.xyz/validators</a></p>
          <p className="mt-4 font-bold">DONE</p>
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