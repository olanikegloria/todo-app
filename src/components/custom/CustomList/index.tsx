import React from 'react';

interface CustomLiProps {
  children: React.ReactNode;
  className?: string;
}

const CustomLi: React.FC<CustomLiProps> = ({ children, className }) => (
  <li className={className}>{children}</li>
);

export default CustomLi;

