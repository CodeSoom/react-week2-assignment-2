import React from 'react';

function Todo({ index, todo, onClick }) {
  return (
    <li>
      {todo}
      <button type="button" onClick={() => onClick(index)}>
        완료
      </button>
    </li>
  );
}

export default Todo;
