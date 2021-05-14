import React from 'react';

export default function TodoAddButton({ onClickAddTodo }) {
  return (
    <button
      type="button"
      onClick={onClickAddTodo}
    >
      추가
    </button>
  );
}
