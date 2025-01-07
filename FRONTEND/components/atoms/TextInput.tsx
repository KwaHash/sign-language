import React from 'react';

type TextInputProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

export function TextInput({ value, onChange, label }: TextInputProps) {
  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-medium mb-2">{label}</label>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="手話をご入力ください。"
        className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring-1 focus:ring-m-blue focus:border-m-blue outline-none transition-colors duration-300 ease-out"
      />
    </div>
  );
}