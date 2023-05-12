import React from 'react';

export default function TodoLists({ todos, onClickComplete }) {
  return (
    <ol>
      {todos?.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button type="button" id={item.id} onClick={onClickComplete}>
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
