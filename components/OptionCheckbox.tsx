
import React from 'react';

interface OptionCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const OptionCheckbox: React.FC<OptionCheckboxProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 text-cyan-500 bg-slate-600 border-slate-500 rounded focus:ring-cyan-600 focus:ring-2 cursor-pointer"
      />
      <label htmlFor={id} className="ml-3 text-base text-slate-200 cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
};

export default OptionCheckbox;
