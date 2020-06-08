import React from 'react';

function Input({ value, onChange, placeholder }) {
  return <input type="text" value={value} onChange={onChange} placeholder={placeholder} />;
}

export default Input;
