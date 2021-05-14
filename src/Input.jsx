import React from 'react';

export default function Input({
  value,
  onChange,
  inputRef,
  onKeyPress,
  type,
}) {
  return (
    <input
      type={type}
      ref={inputRef}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}
