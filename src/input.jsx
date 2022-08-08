import React from 'react';

function Input({ onChange, name, inputRef, placeholder }) {
  return (
    <input
      onChange={onChange}
      name={name}
      ref={inputRef}
      placeholder={placeholder}
    />
  );
}

export default Input;
