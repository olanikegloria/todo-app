import React from 'react';

interface BaseButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseButton: React.FC<BaseButtonProps> = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md shadow-lg ${className}`}
  >
    {children}
  </button>
);

export default BaseButton;

