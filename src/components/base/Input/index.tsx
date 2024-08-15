import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, className = '', placeholder = '' }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    className={`flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 ${className}`}
    placeholder={placeholder}
  />
);

export default Input;
