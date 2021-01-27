import React from 'react';

function Input({ value, placeholder, onChange }) {
  return (
    <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
  );
}

export default Input;
