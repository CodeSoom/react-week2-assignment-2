import React from 'react';

export default function List({ todoList, onClickComplete }) {
  return (
    <ol>
      {todoList.map((i, index) => (
        <li key={i}>
          {i}
          <button type="button" onClick={() => onClickComplete(index)}>완료</button>
        </li>
      ))}
    </ol>
  );
}
