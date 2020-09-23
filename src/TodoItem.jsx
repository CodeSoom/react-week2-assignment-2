import React from 'react';

export default function TodoItem({ id, todoText, onClickComplete }) {
  return (
    <li>
      {todoText}
      <button type="button" onClick={() => onClickComplete(id)}>
        완료
      </button>
    </li>
  );
}
