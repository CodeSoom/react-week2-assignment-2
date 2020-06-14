import React from 'react';

export default function Todo({ todo, onTodoDone }) {
  return (
    <li>
      {todo.text}
      <button type="button" onClick={() => onTodoDone(todo.id)}>완료</button>
    </li>
  );
}
