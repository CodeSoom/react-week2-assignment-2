import React from 'react';

export default function TodoForm({ newOrUpdateTodo, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={newOrUpdateTodo} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
}
