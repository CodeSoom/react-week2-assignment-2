import React from 'react';

export default function CompleteButton({ todoId, setTodos }) {
  function handleClick(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <button
      type="button"
      onClick={() => handleClick(todoId)}
    >
      완료
    </button>
  );
}
