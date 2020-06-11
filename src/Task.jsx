import React from 'react';

function Task({ toDo, handleDeleteTask }) {
  const { id, task } = toDo;

  return (
    <li>
      {task}
      <button type="button" onClick={() => handleDeleteTask(id)}>완료</button>
    </li>
  );
}

export default Task;
