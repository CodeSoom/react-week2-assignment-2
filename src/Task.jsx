import React from 'react';

function Task({ todo, handleClickDeleteTask }) {
  const { id, task } = todo;
  return (
    <li>
      {task}
      <button type="button" onClick={() => handleClickDeleteTask(id)}>완료</button>
    </li>
  );
}

export default Task;
