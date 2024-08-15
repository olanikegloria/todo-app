import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className="mr-4 h-5 w-5 accent-pink-500"
  />
);

export default Checkbox;
