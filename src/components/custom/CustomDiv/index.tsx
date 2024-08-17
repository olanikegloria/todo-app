import React from 'react';

interface CustomDivProps {
  children: React.ReactNode;
  className?: string;
}

const CustomDiv: React.FC<CustomDivProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export default CustomDiv;
