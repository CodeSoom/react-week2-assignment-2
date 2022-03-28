import React from 'react';

export default function CompleteButton({ todoId, setTodos }) {
  function handleClick() {
    setTodos((prev) => prev.filter((todo) => Object.keys(todo))[0] !== todoId);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      완료
    </button>
  );
}
