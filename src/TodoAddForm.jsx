import React from 'react';

const isBlank = (string) => string.trim().length === 0;

export default function TodoAddForm({ newTodo, onSubmit, onChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={newTodo}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit" disabled={isBlank(newTodo)}>추가</button>
    </form>
  );
}
