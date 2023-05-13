import React from 'react';

export default function TodoForm({ newTodo, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={newTodo} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
