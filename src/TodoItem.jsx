import React from 'react';

export default function TodoItem({ title, onClick }) {
  return (
    <li>
      {title}
      <button type="button" onClick={onClick}>
        완료
      </button>
    </li>
  );
}
