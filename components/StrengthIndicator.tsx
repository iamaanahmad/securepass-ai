
import React from 'react';

interface StrengthIndicatorProps {
  strength: number; // 0 (none) to 4 (very strong)
}

const strengthLevels = [
  { label: 'Too Weak!', color: 'bg-red-500' },
  { label: 'Weak', color: 'bg-red-500' },
  { label: 'Medium', color: 'bg-orange-500' },
  { label: 'Strong', color: 'bg-yellow-400' },
  { label: 'Very Strong', color: 'bg-green-500' },
];

const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ strength }) => {
  const level = strengthLevels[strength] || strengthLevels[0];

  return (
    <div className="bg-slate-700/50 p-4 rounded-lg flex items-center justify-between text-slate-300">
      <span className="uppercase text-sm font-semibold text-slate-400">Strength</span>
      <div className="flex items-center gap-3">
        <span className="uppercase text-base font-bold">{level.label}</span>
        <div className="flex gap-1.5 w-24">
            {Array.from({ length: 4 }).map((_, index) => (
                <div 
                    key={index} 
                    className={`h-7 w-full rounded-sm border-2 border-slate-300 ${strength > index ? level.color : 'bg-transparent'} transition-all duration-300`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;
