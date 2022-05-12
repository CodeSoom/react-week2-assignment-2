import React from 'react';

export default function AddTodo({ value, onChange, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        placeholder="할 일을 입력해 주세요"
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}
