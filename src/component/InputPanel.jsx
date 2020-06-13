import React from 'react';

export default function InputPanel({ todo, handleChangeInput, handleTodoAdd }) {
  return (
    <form>
      <input
        type="text"
        value={todo.text}
        onChange={handleChangeInput}
      />
      <button type="button" onClick={handleTodoAdd}>
        추가
      </button>
    </form>
  );
}
