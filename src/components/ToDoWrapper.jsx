import React from 'react';

import TaskForm from '../commons/TaskForm';
import TaskList from './TaskList';

function ToDoWrapper({
  todoState,
}) {
  const {
    input, taskLists, handleTaskInputChange, handleTaskFormSubmit, handleCompleteButton,
  } = todoState;

  return (
    <div>
      <h1>To-do</h1>
      <TaskForm
        value={input}
        onChange={handleTaskInputChange}
        onFormSubmit={handleTaskFormSubmit}
      />
      <TaskList taskLists={taskLists} onClick={handleCompleteButton} />
    </div>
  );
}

export default ToDoWrapper;
