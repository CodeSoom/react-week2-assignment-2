import React from 'react';

export default function List({ todoList }) {
  return (
    <ol>
      {todoList.map((i) => (
        <li>
          {i}
          <button key={String(i)} type="button">완료</button>
        </li>
      ))}
    </ol>
  );
}
