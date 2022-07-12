import React from 'react';

function Input({ placeholder, value, onChange }) {
  return <input placeholder={placeholder} value={value} onChange={onChange} />;
}

export default Input;
