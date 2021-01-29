import React from 'react';

function Task({ id, message, onClickComplete }) {
  return (
    <li>
      {message}
      <button type="button" onClick={() => onClickComplete(id)}>완료</button>
    </li>

  );
}

export default Task;
