import React from 'react';

export default function AddForm({ newTodo, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={newTodo || ''} onChange={onChange} />
      <input type="submit" value="추가" />
    </form>
  );
}
