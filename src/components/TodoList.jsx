import React from 'react';

export default function TodoList({ todoItems, onClick }) {
  const isEmpty = (arr = []) => arr.length === 0;

  if (isEmpty(todoItems)) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          {todo.value}
          <button
            type="button"
            onClick={() => onClick(todo.id)}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
