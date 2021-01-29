import React, { useState } from 'react';
import uuid from 'react-uuid';

import ToDoWrapper from './ToDoPresenter';

function ToDo() {
  const [taskState, setTaskState] = useState({
    taskInput: '',
    taskLists: [],
  });

  const { taskLists, taskInput } = taskState;

  function handleTaskInputChange(event) {
    setTaskState({
      ...taskState,
      taskInput: event.target.value,
    });
  }

  function handleTaskFormSubmit(event) {
    event.preventDefault();
    setTaskState(
      {
        taskInput: '',
        taskLists: [...taskLists, { message: taskInput, id: uuid() }],
      },
    );
  }

  function handleClickComplete(id) {
    setTaskState(
      {
        ...taskState,
        taskLists: taskLists.filter((task) => task.id !== id),
      },
    );
  }

  const todoState = {
    taskState,
    handleTaskInputChange,
    handleTaskFormSubmit,
    handleClickComplete,
  };

  return (
    <ToDoWrapper todoState={todoState} />
  );
}

export default ToDo;
