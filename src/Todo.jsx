import React from 'react';

function Todo({ todo, onClick }) {
  return (
    <li>
      {todo.text}
      <button type="button" onClick={() => onClick(todo.id)}>
        완료
      </button>
    </li>
  );
}

export default Todo;
