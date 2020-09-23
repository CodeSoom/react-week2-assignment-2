import React from 'react';

export default function TodoItem({ id, todoText, onClick }) {
  return (
    <li>
      {todoText}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}
