import React from 'react';

export default function SingleTodo({ todo, handleTodoDone }) {
  return (
    <li>
      {todo.text}
      <button type="button" id={todo.id} onClick={() => handleTodoDone(todo.id)}>완료</button>
    </li>
  );
}
