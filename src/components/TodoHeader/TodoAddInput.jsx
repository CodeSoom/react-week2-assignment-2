import React from 'react';

export default function TodoAddInput({ inputValue, onChange }) {
  return (
    <input value={inputValue} onChange={onChange} />
  );
}
