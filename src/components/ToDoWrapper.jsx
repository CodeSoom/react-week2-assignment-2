import React from 'react';

import TaskForm from './TaskForm';
import TaskList from './TaskList';

function ToDoWrapper({
  todoState,
}) {
  const {
    taskInput, taskLists, handleTaskInputChange, handleTaskFormSubmit, handleCompleteButton,
  } = todoState;

  return (
    <div>
      <h1>To-do</h1>
      <TaskForm
        taskInput={taskInput}
        onTaskInputChange={handleTaskInputChange}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList taskLists={taskLists} onCompleteButton={handleCompleteButton} />
    </div>
  );
}

export default ToDoWrapper;
