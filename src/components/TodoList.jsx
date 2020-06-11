import React from 'react';

import EmptyMessage from './EmptyMessage';

export default function TodoList({ todos, handleComplete }) {
  if (!todos.length) {
    return <EmptyMessage />;
  }
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button type="button" onClick={() => handleComplete(todo.id)}>
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
