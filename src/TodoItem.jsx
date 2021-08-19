import React from 'react';

export default function TodoItem({ todo, onClick }) {
  return (
    <li>
      {todo.contents}
      <button type="button" onClick={onClick}>
        완료
      </button>
    </li>
  );
}
