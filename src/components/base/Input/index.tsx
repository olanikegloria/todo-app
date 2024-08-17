import React from 'react';

interface BaseInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({ value, onChange, onKeyDown, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className="flex-grow px-3 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
    placeholder={placeholder}
  />
);

export default BaseInput;
