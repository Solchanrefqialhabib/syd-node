'use client';

import { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative my-4 bg-[#0d1117] rounded-lg border border-gray-700">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          className="p-2 rounded-md bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
          aria-label="Copy code"
        >
          {isCopied ? (
            <FaCheck className="h-4 w-4 text-primary" />
          ) : (
            <FaRegCopy className="h-4 w-4" />
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-white overflow-x-auto">
        <code>{children}</code>
      </pre>
    </div>
  );
}