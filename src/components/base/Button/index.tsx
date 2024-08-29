import React from 'react';

interface BaseButtonProps {
  onClick?: () => void;  // Make onClick optional since it's not always needed for buttons like "submit"
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';  // Add the `type` prop
}

const BaseButton: React.FC<BaseButtonProps> = ({ onClick, children, className, type = 'button' }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md shadow-lg ${className}`}
    type={type}  // Assign the type prop here
  >
    {children}
  </button>
);

export default BaseButton;


