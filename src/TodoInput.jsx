import React from 'react';

export default function TodoInput({ todoInput, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={todoInput.text} />
      <button type="submit">추가</button>
    </form>
  );
}
