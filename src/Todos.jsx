import React from 'react';

export default function Todos({ todos, onClick }) {
  return (
    <ol>
      {
        todos.map(({ id, content }) => (
          <li data-id={id} key={id}>
            <span>{content}</span>
            <button type="button" onClick={() => onClick(id)}>완료</button>
          </li>
        ))
      }
    </ol>
  );
}
