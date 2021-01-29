import React from 'react';

import TaskForm from '../commons/TaskForm';
import List from './List';

function ToDoWrapper({
  todoState,
}) {
  const {
    input, list, handleTaskInputChange, handleTaskFormSubmit, handleCompleteButton,
  } = todoState;

  return (
    <div>
      <h1>To-do</h1>
      <TaskForm
        value={input}
        onChange={handleTaskInputChange}
        onFormSubmit={handleTaskFormSubmit}
      />
      <List list={list} onClick={handleCompleteButton} />
    </div>
  );
}

export default ToDoWrapper;
