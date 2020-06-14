import React from 'react';

export default function SingleTodo({ todo, handleTodoDone }) {
  return (
    <li>
      {todo.text}
      <button type="button" onClick={() => handleTodoDone(todo.id)}>완료</button>
    </li>
  );
}
