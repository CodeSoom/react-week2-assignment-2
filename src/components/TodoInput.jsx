import React from 'react';

export default function TodoInput({ inputText, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputText} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
