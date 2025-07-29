
import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

interface PasswordDisplayProps {
  password?: string;
  isLoading?: boolean;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, isLoading = false }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    if (password && !isLoading) {
      navigator.clipboard.writeText(password);
      setCopied(true);
    }
  };

  const displayText = isLoading ? 'Generating...' : password || 'P4$5W0rD!';
  const textColor = password && !isLoading ? 'text-slate-50' : 'text-slate-500';

  return (
    <div className="bg-slate-900/70 rounded-lg p-4 flex items-center justify-between gap-4 mb-6 border border-slate-700">
      <span className={`font-mono text-xl md:text-2xl break-all ${textColor} transition-colors duration-300`}>
        {displayText}
      </span>
      <button
        onClick={handleCopy}
        disabled={!password || isLoading}
        className="p-2 rounded-md text-slate-300 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Copy password"
      >
        {copied ? (
          <CheckIcon className="w-6 h-6 text-green-400" />
        ) : (
          <CopyIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default PasswordDisplay;
