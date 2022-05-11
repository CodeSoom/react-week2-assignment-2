import React from 'react';

export default function InputTodo({ onClick, onChange, todo }) {
  function handleSubmit(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" size="20" value={todo} placeholder="할 일을 입력해주세요" onChange={(e) => onChange(e.target.value)} />
      <button type="submit">추가</button>
    </form>
  );
}
