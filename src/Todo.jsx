import React from 'react';

function Todo({ todo, onClick }) {
  return (
    <li>
      <span>{todo}</span>
      <button type="button" onClick={onClick}>
        완료
      </button>
    </li>
  );
}

export default Todo;
