import React from 'react';

export default function Form({ newTodo, onSubmit, onChange }) {
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
      <button type="submit">추가</button>
    </form>
  );
}
