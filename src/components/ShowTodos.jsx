import React from 'react';

export default function ShowTodos({ todos, onClickComplete }) {
  return (
    <ol>
      {todos.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button type="button" id={id} onClick={() => onClickComplete(id)}>
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
