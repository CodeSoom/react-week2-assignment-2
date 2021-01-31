import React from 'react';

export default function AddButton({ onClickAddTodo }) {
  return (
    <button
      type="submit"
      onClick={onClickAddTodo}
    >
      추가
    </button>
  );
}
