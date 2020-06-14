import React from 'react';

function Task({ todo: { id, task }, handleClickDeleteTask }) {
  return (
    <li>
      {task}
      <button type="button" onClick={() => handleClickDeleteTask(id)}>완료</button>
    </li>
  );
}

export default Task;
