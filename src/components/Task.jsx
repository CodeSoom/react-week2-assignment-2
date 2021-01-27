import React from 'react';

function Task({ id, message, onClick }) {
  return (
    <li>
      {message}
      <button type="button" onClick={() => onClick(id)}>완료</button>
    </li>

  );
}

export default Task;
