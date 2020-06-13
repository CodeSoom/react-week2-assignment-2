import React from 'react';

export default function TodoForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = e.target.todoText.value;
    if (todoText.trim()) {
      onSubmit(todoText);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        name="todoText"
      />
      <button type="button">추가</button>
    </form>
  );
}
