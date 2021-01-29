import React from 'react';

import { TaskForm, TaskList } from '../Tasks';

function ToDoPresenter({
  todoState,
}) {
  const {
    taskState, handleTaskInputChange, handleTaskFormSubmit, handleClickComplete,
  } = todoState;

  const { taskInput, taskLists } = taskState;
  return (
    <div>
      <h1>To-do</h1>
      <TaskForm
        taskInput={taskInput}
        onTaskInputChange={handleTaskInputChange}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList taskLists={taskLists} onClickComplete={handleClickComplete} />
    </div>
  );
}

export default ToDoPresenter;
