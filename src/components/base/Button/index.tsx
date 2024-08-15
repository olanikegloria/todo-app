import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => (
  <button onClick={onClick} className={`px-3 py-1.5 rounded-md ${className}`}>
    {children}
  </button>
);

export default Button;
