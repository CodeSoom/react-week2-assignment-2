import React from 'react';

export default function TodoItem({ todo: { todoText, id }, onClick }) {
  return (
    <li>
      {todoText}
      <button
        type="button"
        onClick={() => onClick(id)}
      >
        완료
      </button>
    </li>
  );
}
