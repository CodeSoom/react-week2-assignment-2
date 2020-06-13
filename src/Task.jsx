import React from 'react';

function Task({ todo, handleDeleteTask }) {
  const { id, task } = todo;

  return (
    <li>
      {task}
      <button type="button" onClick={() => handleDeleteTask(id)}>완료</button>
    </li>
  );
}

export default Task;
