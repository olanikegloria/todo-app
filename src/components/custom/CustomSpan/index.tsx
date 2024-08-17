import React from 'react';

interface CustomSpanProps {
  children: React.ReactNode;
  className?: string;
}

const CustomSpan: React.FC<CustomSpanProps> = ({ children, className }) => (
  <span className={className}>{children}</span>
);

export default CustomSpan;

