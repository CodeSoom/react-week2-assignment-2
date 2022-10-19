import React from 'react';

function Todo({ text, onClick }) {
  return (
    <li>
      <span>{text}</span>
      <button type="button" onClick={onClick}>완료</button>
    </li>
  );
}

export default Todo;
