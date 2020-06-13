import React from 'react';

export default function Form({ value, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
