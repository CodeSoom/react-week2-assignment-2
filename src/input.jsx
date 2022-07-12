import React from 'react';

function Input({ className, inputRef, placeholder }) {
  return (
    <input className={className} ref={inputRef} placeholder={placeholder} />
  );
}

export default Input;
