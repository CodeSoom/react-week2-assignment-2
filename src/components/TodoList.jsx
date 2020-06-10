import React from 'react';

export default function TodoList({ todos, handleComplete }) {
  return (
    <>
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
    </>
  );
}
