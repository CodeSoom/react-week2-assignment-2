import React from 'react';

function Task({ id, message, onCompleteButton }) {
  return (
    <li>
      {message}
      <button type="button" onClick={() => onCompleteButton(id)}>완료</button>
    </li>

  );
}

export default Task;
