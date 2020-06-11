import React from 'react';

export default function TodoAddInput({ inputValueState, onChange }) {
  const { inputValue } = inputValueState;

  return (
    <input value={inputValue} onChange={(e) => onChange(e)} />
  );
}
