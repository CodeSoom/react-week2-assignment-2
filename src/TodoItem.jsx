import React from 'react';

export default function TodoItem({ id, todoText, onClick }) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <li>
      {todoText}
      <button type="button" onClick={handleClick}>완료</button>
    </li>
  );
}
