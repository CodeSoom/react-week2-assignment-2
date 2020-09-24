import React from 'react';

function Todo({ id, content, onClick }) {
  return (
    <li>
      {content}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>
  );
}

export default Todo;
