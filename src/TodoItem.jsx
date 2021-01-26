import React from 'react';

export default function TodoItem({
  id,
  text,
  onClick,
}) {
  return (
    <li>
      {text}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}
