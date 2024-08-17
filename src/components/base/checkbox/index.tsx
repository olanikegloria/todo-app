import React from 'react';

interface BaseCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const BaseCheckbox: React.FC<BaseCheckboxProps> = ({ checked, onChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={onChange}
    className="w-5 h-5 mr-2"
  />
);

export default BaseCheckbox;
