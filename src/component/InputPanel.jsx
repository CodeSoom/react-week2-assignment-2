import React from 'react';

export default function InputPanel({ todo, onInputChange, onTodoCreate }) {
  return (
    <form>
      <input
        type="text"
        value={todo.text}
        onChange={onInputChange}
      />
      <button type="button" onClick={onTodoCreate}>
        추가
      </button>
    </form>
  );
}
