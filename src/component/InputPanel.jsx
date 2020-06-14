import React from 'react';

export default function InputPanel({ todo, onInputChange, handleTodoAdd }) {
  return (
    <form>
      <input
        type="text"
        value={todo.text}
        onChange={onInputChange}
      />
      <button type="button" onClick={handleTodoAdd}>
        추가
      </button>
    </form>
  );
}
